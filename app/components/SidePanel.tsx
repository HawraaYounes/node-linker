export default function SidePanelUI({ isEditing = true }) {
    return (
      <div className="w-64 p-4 bg-gray-50 border-l border-gray-200">
        <h2 className="text-lg font-semibold mb-4">
          {isEditing ? 'Edit Node' : 'Add Node'}
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Node Name
            </label>
            <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          {isEditing ? (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Habit
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Select a habit</option>
                <option value="Reading">Reading</option>
                <option value="Exercise">Exercise</option>
                <option value="Meditation">Meditation</option>
              </select>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
          )}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            {isEditing ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    );
  }
  