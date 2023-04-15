export const AddskillBtn = ({ toggleAdding }) => {
  return (
    <button
      onClick={toggleAdding}
      className="flex items-center hover:opacity-70"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="fill-purple-200 stroke-1 w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="mx-1">Add Skill</p>
    </button>
  );
};
