import { format } from "date-fns";
import { FaBell } from "react-icons/fa";

const Notification = ({ notifications }) => {
  return (
    <>
      <button onClick={() => document.getElementById("my_modal_2").showModal()}>
        <FaBell className="text-2xl" />
        {/* Notification count */}
        <span className="absolute top-4 right-16 text-red-600 text-xs font-bold bg-white rounded-full w-5 h-5 flex items-center justify-center">
          {notifications?.length}
        </span>
      </button>

      <dialog id="my_modal_2" className="modal text-black">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center pb-4">Notifications</h3>

          {notifications.map((notification) => (
            <>
              <div key={notification._id} className="border rounded-xl px-4 py-1 my-2">
                <p className="text-gray-700 text-sm">{notification?.message}</p>
                <p className="text-xs text-gray-600">
                  {notification?.Time
                    ? format(new Date(notification?.Time), "P")
                    : "N/A"}
                </p>
              </div>
            </>
          ))}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Notification;
