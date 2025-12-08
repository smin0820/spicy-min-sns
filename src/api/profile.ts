import supabase from "@/lib/supabase";
import { getRandomNickname } from "@/lib/utils";

export async function fetchProfile(userId: string) {
  // profile 테이블로 부터
  // 모든 컬럼 데이터를
  // id 컬럼 값이 userId와 같은 행만 조회
  // 결과를 무조건 하나의 객체로 받는다
  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;
  return data;
}

export async function createProfile(userId: string) {
  const { data, error } = await supabase
    .from("profile")
    .insert({
      id: userId,
      nickname: getRandomNickname(),
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}
