interface AbstCardType {
  children: ReactNode;
}

export default function AbstCard({ children }: AbstCardType) {
  return (
    <div class="flex justify-center items-center ">
      <div
        class=
          "border-4 border-kn_l_blue m-4 p-4  rounded-2xl border-double"
        )}
      >
        <div class="flex justify-center items-center flex-col">
          <p class="text-2xl mb-2">簡単に言うと……</p>
          {children}
        </div>
      </div>
    </div>
  );
}
