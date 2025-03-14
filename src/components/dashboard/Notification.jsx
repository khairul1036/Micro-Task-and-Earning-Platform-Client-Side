import { format } from "date-fns";
import { FaBell } from "react-icons/fa";

const Notification = ({ notifications }) => {
  return (
    <>
      <button
        className="mr-4"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <FaBell className="text-3xl text-white" />
        {/* Notification count */}
        <span className="absolute top-2 mr-4 -right-1 md:right-2 lg:right-16 text-red-600 text-xs font-bold bg-white rounded-full w-5 h-5 flex items-center justify-center">
          {notifications?.length}
        </span>
      </button>

      <dialog id="my_modal_2" className="modal text-black">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center pb-4">Notifications</h3>

          {notifications?.length === 0 ? (
            <p className="text-center py-5 text-gray-500">no notification</p>
          ) : (
            <>
              {notifications.map((notification, index) => (
                <div key={index} className="border rounded-xl px-4 py-1 my-2">
                  <p className="text-gray-700 text-sm">
                    {notification?.message}
                  </p>
                  <p className="text-xs text-gray-600">
                    {notification?.Time
                      ? format(new Date(notification?.Time), "P")
                      : "N/A"}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Notification;
