import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
  };

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-3 lg:p-5">
        <div className="flex justify-center items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block">Danh sách bạn bè</span>
        </div>

        <div className="mt-2 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">Chỉ hiển thị trực tuyến</span>
          </label>
          <span className="text-xs text-zinc-500">
            ({onlineUsers.length - 1} online)
          </span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-2 lg:py-3">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-2 lg:p-3 flex flex-col lg:flex-row items-center lg:items-center gap-1 lg:gap-3
              hover:bg-base-300 transition-colors
              ${
                selectedUser?._id === user._id
                  ? "bg-base-300 ring-1 ring-base-300"
                  : ""
              }
            `}
          >
            <div className="relative">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-10 lg:size-12 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-2 lg:size-3 bg-green-500 
                  rounded-full ring-1 lg:ring-2 ring-zinc-900"
                />
              )}
            </div>

            <div className="text-center lg:text-left min-w-0">
              <div className="font-medium truncate text-sm lg:text-base">
                <span className="block lg:hidden">
                  {getFirstName(user.fullName)}...
                </span>
                <span className="hidden lg:block">{user.fullName}</span>
              </div>
              <div className="text-xs lg:text-sm text-zinc-400 hidden lg:block">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-zinc-500 py-4">
            Không có người dùng trực tuyến
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
