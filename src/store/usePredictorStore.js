import { create } from "zustand";
import axios from "axios";
 
const API_URL = "http://localhost:8000/predict";
 

export const usePredictorStore = create((set, get) => ({
  form: {
    pclass: 2,
    sex: 1,
    age: 30,
    fare: 30,
    familySize: 1,
    embarked: 2,
  },
  result: null,
  loading: false,
  error: null,
 
  setField: (key, value) =>
    set((state) => ({ form: { ...state.form, [key]: value } })),
 
  predict: async () => {
    set({ loading: true, result: null, error: null });
    try {
      const response = await axios.post(API_URL, get().form );
      set({ result: response.data, loading: false }); 
    } catch (err) {
      set({ error: "Could not reach the prediction server. Is it running?", loading: false });
    }
  },
}));