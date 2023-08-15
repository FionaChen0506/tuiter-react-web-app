export const profileThunk = createAsyncThunk(
    "users/profile", async () => {
      const response = await userService.getProfile();
      return response.data;
  });
  