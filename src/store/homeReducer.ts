import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type heroCarSearchType = {
  location: string;
  pickupInfo: { pickupDate: string; pickupTime: string };
  dropOffInfo: { dropOffDate: string; dropOffTime: string };
};

const initialState: heroCarSearchType = {
  location: "",
  pickupInfo: { pickupDate: "", pickupTime: "" },
  dropOffInfo: { dropOffDate: "", dropOffTime: "" },
};

const heroCarSearchSlice = createSlice({
  name: "heroCarSearch",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<string>) {
      // console.log("this is the location", action);
      state.location = action.payload;
    },
    setPickupInfo(
      state,
      action: PayloadAction<{ pickupDate: string; pickupTime: string }>
    ) {
      // console.log("this is the pickupinfo", action);

      state.pickupInfo = action.payload;
    },
    setDropOffInfo(
      state,
      action: PayloadAction<{ dropOffDate: string; dropOffTime: string }>
    ) {
      // console.log("this is the dropOffInfo", action);

      state.dropOffInfo = action.payload;
    },
  },
});

export const { setLocation, setPickupInfo, setDropOffInfo } =
  heroCarSearchSlice.actions;
export default heroCarSearchSlice.reducer;
