interface ResponseTimeWrapperType {
  title: string;
  time: number;
}

export default function ResponseTimeWrapper({
  title,
  time,
}: ResponseTimeWrapperType) {
  return (
    <div class="flex justify-center items-center flex-col">
      <h3 class="">{title}</h3>
      <p class="text-3xl">
        {time}
        <span class="text-xs">ms</span>
      </p>
    </div>
  );
}
