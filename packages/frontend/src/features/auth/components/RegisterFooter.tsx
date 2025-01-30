const RegisterFormFooter = () => {

  function handleSignInClick() {}

  return (
    <div className="text-center">
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 bg-white/80 text-sm text-gray-500">
            Already have an account?
          </span>
        </div>
      </div>
      <button
        onClick={handleSignInClick}
        className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors hover:underline"
      >
        Sign in
      </button>
    </div>
  );
};

export default RegisterFormFooter;
