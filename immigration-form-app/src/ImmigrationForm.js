import { useForm } from "react-hook-form";

export default function ImmigrationForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-xl w-1/3"
      >
        <h1 className="text-2xl font-bold mb-4">Immigration Form</h1>
        <div className="mb-4">
          <label className="block mb-2">
            Country of Birth
            <input
              type="text"
              {...register("countryOfBirth", {
                required: "This field is required",
              })}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Street Number and Name
            <input
              type="text"
              {...register("streetNameAndNumber", {
                required: "This field is required",
              })}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            City
            <input
              type="text"
              {...register("city", { required: "This field is required" })}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
