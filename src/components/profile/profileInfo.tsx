import { useProfileData } from "@/hooks/queries/useProfileData";
import Fallback from "../fallback";
import Loader from "../loader";
import defaultAvatar from "@/assets/default-avatar.jpg";

export default function ProfileInfo({ userId }: { userId: string }) {
  const {
    data: Profile,
    error: fetchProfileError,
    isPending: isFetchingProfilePending,
  } = useProfileData(userId);

  if (fetchProfileError) return <Fallback />;
  if (isFetchingProfilePending) return <Loader />;

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <img
        src={Profile.avatar_url || defaultAvatar}
        className="h-30 w-30 rounded-full object-cover"
      />
      <div className="flex flex-col items-center gap-2">
        <div className="text-xl font-bold">{Profile.nickname}</div>
        <div className="text-muted-foreground">{Profile.bio}</div>
      </div>
    </div>
  );
}
