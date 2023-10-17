import { ArrowLeft } from "@/assets/images/ArrowLeft";

export const BackButton = () => {
  return (
    <button
      type="button"
      className="flex cursor-pointer"
      onClick={() => window.history.back()}
    >
      <ArrowLeft />
      <nav>
        <a className="text-black text-lg ml-2">Back</a>
      </nav>
    </button>
  );
};
