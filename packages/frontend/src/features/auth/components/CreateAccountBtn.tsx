import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";

const CreateAccountBtn = () => (
  <Button
    type="submit"
    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:shadow-lg"
  >
    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
      <ArrowRight className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
    </span>
    Create Account
  </Button>
);

export default CreateAccountBtn;
