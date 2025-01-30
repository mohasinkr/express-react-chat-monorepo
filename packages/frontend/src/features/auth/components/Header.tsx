import { MessageCircle } from "lucide-react";

const HeaderSection = () => (
  <div className="text-center">
    <div className="flex justify-center mb-4">
      <div className="p-3 bg-indigo-100 rounded-xl">
        <MessageCircle className="w-8 h-8 text-indigo-600" />
      </div>
    </div>
    <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
    <p className="mt-2 text-sm text-gray-600">
      Join thousands of users in our chat community
    </p>
  </div>
);

export default HeaderSection;
