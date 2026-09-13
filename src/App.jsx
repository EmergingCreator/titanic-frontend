import { useRef } from "react";
import { usePredictorStore } from "./store/usePredictorStore";
function App() {

const form = usePredictorStore((s) => s.form);
  const result = usePredictorStore((s) => s.result);
  const loading = usePredictorStore((s) => s.loading);
  const error = usePredictorStore((s) => s.error);
  const setField = usePredictorStore((s) => s.setField);
  const predict = usePredictorStore((s) => s.predict);
 
  const predictRef = useRef(null);
  const scrollToPredict = () => predictRef.current?.scrollIntoView({ behavior: "smooth" });
 
  const handleSubmit = (e) => {
    
    e.preventDefault();
    predict();
  };
 
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-serif">
      {/* NAV */}
      <nav className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800 font-sans">
        <span className="text-lg">RMS Predictor</span>
        <button
          onClick={scrollToPredict}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm px-4 py-2 rounded-md transition-colors"
        >
          Predict a passenger
        </button>
      </nav>
 
      {/* HERO */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
          Would you have survived the Titanic?
        </h1>
        <p className="font-sans text-slate-400 max-w-md mb-8">
          Enter a passenger's details and see what your model predicts.
        </p>
        <button
          onClick={scrollToPredict}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-sans font-semibold px-7 py-3 rounded-md transition-colors"
        >
          Try the predictor
        </button>
      </div>
 
      {/* STATS */}
      <section className="px-6 py-16 max-w-4xl mx-auto font-sans">
        <h2 className="font-serif text-2xl text-slate-100 mb-8">The voyage, in short</h2>
        <div className="flex flex-wrap gap-10">
          <div>
            <div className="font-serif text-3xl text-amber-400">2,224</div>
            <div className="text-sm text-slate-400">aboard</div>
          </div>
          <div>
            <div className="font-serif text-3xl text-amber-400">~706</div>
            <div className="text-sm text-slate-400">survived</div>
          </div>
          <div>
            <div className="font-serif text-3xl text-amber-400">32%</div>
            <div className="text-sm text-slate-400">survival rate</div>
          </div>
        </div>
      </section>
 
      {/* CLASSES */}
      <section className="px-6 py-16 max-w-4xl mx-auto font-sans">
        <h2 className="font-serif text-2xl text-slate-100 mb-2">Three classes, three fates</h2>
        <p className="text-slate-400 mb-8 max-w-lg">
          Cabin class was one of the strongest predictors of survival.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <div className="flex items-baseline justify-between mb-2">
              <span>First class</span>
              <span className="font-serif text-xl text-amber-400">62%</span>
            </div>
            <div className="h-1.5 bg-slate-950 rounded-full">
              <div className="h-full bg-amber-500 rounded-full w-[62%]" />
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <div className="flex items-baseline justify-between mb-2">
              <span>Second class</span>
              <span className="font-serif text-xl text-amber-400">43%</span>
            </div>
            <div className="h-1.5 bg-slate-950 rounded-full">
              <div className="h-full bg-amber-500 rounded-full w-[43%]" />
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <div className="flex items-baseline justify-between mb-2">
              <span>Third class</span>
              <span className="font-serif text-xl text-amber-400">25%</span>
            </div>
            <div className="h-1.5 bg-slate-950 rounded-full">
              <div className="h-full bg-amber-500 rounded-full w-[25%]" />
            </div>
          </div>
        </div>
      </section>
 
      {/* DASHBOARD */}
      <section className="px-6 py-16 max-w-4xl mx-auto font-sans">
        <h2 className="font-serif text-2xl text-slate-100 mb-2">Explore the full dataset</h2>
        <p className="text-slate-400 mb-8 max-w-lg">
          A deeper look at the Titanic passenger data behind these predictions.
        </p>
        <div className="w-full rounded-lg overflow-hidden border border-slate-800">
          <iframe
            title="TitanicSurvival"
            className="w-full"
            height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=52c42acf-88f4-47a6-b944-b1117994e9c6&autoAuth=true&ctid=789a7d0d-b817-4cbd-aecb-fbc2a7017168"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </section>

      {/* PREDICTOR */}
      <section ref={predictRef} className="px-6 py-16 bg-slate-900/40">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-5 font-sans">
            <h2 className="font-serif text-2xl text-slate-100 mb-2">Predict a passenger's fate</h2>
 
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Passenger class</label>
                <select
                  value={form.pclass}
                  onChange={(e) => setField("pclass", Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:border-amber-500"
                >
                  <option value={1}>1st class</option>
                  <option value={2}>2nd class</option>
                  <option value={3}>3rd class</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Sex</label>
                <select
                  value={form.sex}
                  onChange={(e) => setField("sex", e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:border-amber-500"
                >
                  <option value={1}>Male</option>
                  <option value={0}>Female</option>
                </select>
              </div>
            </div>
 
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Age</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={form.age}
                  onChange={(e) => setField("age", Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Fare paid (£)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.fare}
                  onChange={(e) => setField("fare", Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
 
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Family members aboard</label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={form.familySize}
                  onChange={(e) => setField("familySize", Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Embarked from</label>
                <select
                  value={form.embarked}
                  onChange={(e) => setField("embarked", Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:border-amber-500"
                >
                  <option value={2}>Southampton</option>
                  <option value={0}>Cherbourg</option>
                  <option value={1}>Queenstown</option>
                </select>
              </div>
            </div>
 
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-slate-950 font-semibold py-3 rounded-md transition-colors"
            >
              {loading ? "Predicting..." : "Predict"}
            </button>
          </form>
 
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col items-center justify-center min-h-[280px] font-sans text-center">
            {!result && !error && <span className="text-slate-500">Fill in the form and predict</span>}
 
            {result && (
              <div
                className={`w-full rounded-lg p-4 ${
                  result.survived
                    ? "bg-emerald-950 border border-emerald-700 text-emerald-300"
                    : "bg-red-950 border border-red-800 text-red-300"
                }`}
              >
                <div className="font-semibold">
                  {result.survived ? "Predicted: Survived" : "Predicted: Did not survive"}
                </div>
                <div className="text-sm opacity-80 mt-1">
                  Survival probability: {(result.probability[1] * 100).toFixed(1)}%
                </div>
              </div>
            )}
 
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </div>
        </div>
      </section>
 
      <footer className="px-6 py-8 border-t border-slate-800 text-center text-sm text-slate-500 font-sans">
        <p>Built for a model trained on pclass, sex, age, fare, family size and embarkation port.</p>
        <a
          href="https://www.linkedin.com/in/chirag-raj-b0a622360/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-amber-400 hover:text-amber-300 transition-colors"
        >
          Connect on LinkedIn
        </a>
      </footer>
    </div>
  );
}

export default App
