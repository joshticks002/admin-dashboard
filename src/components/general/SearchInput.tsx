interface SearchInputProps {
  label?: string;
  type: string;
  placeholder?: string;
  icon?: string;
}

function SearchInput({ label, type, placeholder, icon }: SearchInputProps) {
  return (
    <form className="w-full">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img className="" src={icon} alt="Search Icon" />
        </div>
        <input
          type={type}
          id="default-search"
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder={placeholder}
          required
        />
      </div>
    </form>
  );
}

export default SearchInput;
