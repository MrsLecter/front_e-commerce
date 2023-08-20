import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICarData {
  makerName: string;
  modelName: string;
  year: string;
}

const carSetting: ICarData = {
  makerName: "",
  modelName: "",
  year: "",
};

export const carSlice = createSlice({
  name: "modal",
  initialState: carSetting,
  reducers: {
    setCarProps(
      state,
      action: PayloadAction<{
        makerName: string;
        modelName: string;
        year: string;
      }>
    ) {
      state.makerName = action.payload.makerName;
      state.modelName = action.payload.modelName;
      state.year = action.payload.year;
    },

    deleteCarProps(state) {
      state.makerName = "";
      state.modelName = "";
      state.year = "";
    },
  },
});

export const { setCarProps, deleteCarProps } = carSlice.actions;

export default carSlice.reducer;
