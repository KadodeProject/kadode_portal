interface UserChangeT {
  title: string;
  total: number;
  change: number;
  unit: string; //単位
}

export default function UserChangeCard({
  title,
  total,
  change,
  unit,
}: UserChangeT) {
  return (
    <div class="flex justify-center items-center flex-col bg-kn_white rounded-2xl p-4">
      <h3 class="text-2xl mb-2">{title}</h3>
      <div class="flex m-2 items-center">
        <p class="text-4xl">{total}</p>
        {/* プラス・マイナス表示(マイナスなら自動でつくので不要) */}
        <p class="text-2xl">
          ({change >= 0 ? "+" : ""}
          {change})
        </p>
        <p class="text-3xl">{unit}</p>
      </div>
    </div>
  );
}
