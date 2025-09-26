import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCurrentWeather, fetchFiveDayForecast } from "../../api/WeatherService";

// Async thunks
export const getCurrentWeather = createAsyncThunk(
  "weather/getCurrentWeather",
  async (city, { rejectWithValue }) => {
    try {
      const data = await fetchCurrentWeather(city);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFiveDayForecast = createAsyncThunk(
  "weather/getFiveDayForecast",
  async (city, { rejectWithValue }) => {
    try {
      const data = await fetchFiveDayForecast(city);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    currentWeather: null,
    forecast: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Current Weather
      .addCase(getCurrentWeather.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentWeather = action.payload;
      })
      .addCase(getCurrentWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Five Day Forecast
      .addCase(getFiveDayForecast.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getFiveDayForecast.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.forecast = action.payload;
      })
      .addCase(getFiveDayForecast.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export default weatherSlice.reducer;