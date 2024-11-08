"use client";

import { useForm, Controller, FormProvider } from "react-hook-form";
import MDEditor from "@uiw/react-md-editor";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

interface PostFormData {
  title: string;
  tags: string;
  content: string;
}

// Custom styled components using theme.spacing()
const StyledEditorBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F5F5F7",
  color: "white",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
}));

export default function PostEditor() {
  const methods = useForm<PostFormData>({
    defaultValues: {
      title: "",
      tags: "",
      content: "",
    },
  });
  const { handleSubmit, control, register } = methods;

  const onSubmit = (data: PostFormData) => {
    console.log(data); // Handle form data submission
  };

  return (
    <FormProvider {...methods}>
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} mb={2} mt={3}>
            {/* Left side: Editor */}
            <Grid item xs={10} md={20}>
              <StyledEditorBox>
                <TextField
                  fullWidth
                  placeholder="New post title here..."
                  variant="outlined"
                  InputProps={{ style: { color: "white" } }}
                  sx={{ mb: 3 }}
                  {...register("title")}
                />
                <TextField
                  fullWidth
                  placeholder="Add up to 4 tags..."
                  variant="outlined"
                  InputProps={{ style: { color: "white" } }}
                  sx={{ mb: 3 }}
                  {...register("tags")}
                />

                <Controller
                  name="content"
                  control={control}
                  render={({ field }) => (
                    <div data-color-mode="light">
                      <MDEditor
                        {...field}
                        minHeight={400}
                        // style={{
                        //   color: "black",
                        //   borderRadius: "8px",
                        //   background: "White",
                        // }}
                        // previewOptions={{
                        //   style: {
                        //     color: "black",
                        //     backgroundColor: "white",
                        //   },
                        // }}
                      />
                    </div>
                  )}
                />
              </StyledEditorBox>
            </Grid>
          </Grid>

          {/* Bottom buttons */}
          <Box
            component="div"
            sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}
          >
            <Button variant="contained" color="primary" type="submit">
              Publish
            </Button>
            <Button variant="outlined" color="secondary" type="button">
              Save draft
            </Button>
          </Box>
        </form>
      </Container>
    </FormProvider>
  );
}
