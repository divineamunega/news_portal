import { Form, useActionData, useNavigation } from "react-router-dom";
import Editor from "./Editor";
import ImageSelect from "./ImageSelect";
import Select from "./Select";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";

const NewArticle = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const loading =
    navigation.state === "loading" || navigation.state === "submitting";

  useEffect(() => {
    data?.err && enqueueSnackbar(`${data.err}`);
  }, [data]);

  return (
    <div className="h-full w-full overflow-y-scroll rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold">Add New Article</h1>
      <Form method="POST" encType="multipart/form-data">
        <div className="space-y-6">
          <div className="grid gap-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <input
              id="title"
              placeholder="Enter article title"
              name="title"
              className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="title" className="text-sm font-medium">
              Description
            </label>
            <input
              id="title"
              name="description"
              placeholder="Describe your article here"
              className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex w-full items-center justify-center gap-5">
            <Select />
            <ImageSelect />
          </div>

          <Editor />
          <div className="flex gap-5">
            <button
              type="submit"
              name="save"
              value="save"
              disabled={true}
              className="w-1/2 rounded-md border-2 border-black bg-white px-4 py-2 text-black opacity-30 transition-all duration-500 hover:bg-black hover:text-white focus:outline-none disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
            >
              Save Article
            </button>

            <button
              type="submit"
              name="publish"
              value="publish"
              disabled={loading}
              className="w-1/2 rounded-md border-2 border-black bg-black px-4 py-2 text-white duration-500 hover:bg-white hover:text-black focus:outline-none disabled:cursor-wait disabled:opacity-65 disabled:hover:bg-black disabled:hover:text-white"
            >
              Publish
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default NewArticle;
