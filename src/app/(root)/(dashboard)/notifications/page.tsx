import React from "react";

const NotificationsPage = () => {
  return (
    <div>
      <div className="w-full h-[40px] mb-2 flex items-center justify-between">
        <h3 className="text-[26px] font-raleway font-bold capitalize">
          Notifications
        </h3>{" "}
      </div>{" "}
      <div className="w-full h-auto py-2  px-2 ">
        <div className="w-full h-[148px] shadow-md cursor-not-allowed rounded-[4px] flex items-center justify-center font-bold text-[18px] text-gray-600 font-raleway border border-black border-dashed">
          No New Notifications
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
