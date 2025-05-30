import EnrolledTuition from "../components/dashboard/menu/EnrolledTuition";
import ProvidedTuition from "../components/dashboard/menu/ProvidedTuition";
import useAuthContext from "../hooks/useAuthContext";

const Dashboard = () => {
  const { user } = useAuthContext();
  return (
    <div className="mx-auto">
      <div className="m-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
          {/* Total Enrollments */}
          <div className="bg-white rounded-xl shadow-md p-4 w-full">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="bg-blue-50 text-gray-600 py-1 px-3 rounded-full font-medium text-lg mb-2">
                Total Enrollments
              </p>
              <h3 className="text-xl md:text-3xl font-bold text-gray-600">
                {user.applied_tuition.length}
              </h3>
            </div>
          </div>

          {/* Active Courses */}
          <div className="bg-white rounded-xl shadow-md p-4 w-full">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="bg-blue-50 text-green-500 py-1 px-3 rounded-full font-medium text-lg mb-2">
                Active Courses
              </p>
              <h3 className="text-xl md:text-3xl font-bold text-green-500">
                {user.applied_tuition.length}
              </h3>
            </div>
          </div>

          {/* Upcoming Requests */}
          <div className="bg-white rounded-xl shadow-md p-4 w-full">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="bg-blue-50 text-blue-700 py-1 px-3 rounded-full font-medium text-lg mb-2">
                Upcoming Courses
              </p>
              <h3 className="text-xl md:text-3xl font-bold text-blue-700">0</h3>
            </div>
          </div>

          {/* Completed Courses  */}
          <div className="bg-white rounded-xl shadow-md p-4 w-full">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="bg-blue-50 text-red-500 py-1 px-3 rounded-full font-medium text-lg mb-2">
                Completed Courses
              </p>
              <h3 className="text-xl md:text-3xl font-bold text-red-500">0</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5">
        {/* {user.role === "Teacher" && (
          <div>
            <h2 className="text-2xl bg-blue-50 text-gray-600 py-1 px-3 rounded-full font-medium mb-2 ">
              Provided Courses
            </h2>
            <ProvidedTuition user={user} />
          </div>
        )} */}

              
        <h2 className="text-2xl bg-blue-50 text-gray-700 py-1 px-3 rounded-full font-medium mb-2 ">
          Enrolled Courses
        </h2>
        <EnrolledTuition user={user} />
      </div>
    </div>
  );
};

export default Dashboard;
