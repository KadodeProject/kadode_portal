interface OperationCoreInfoWrapperType {
  title: string;
  percent: number;
}

export default function MachineResourceWrapper({
  title,
  percent,
}: OperationCoreInfoWrapperType) {
  return (
    <div class="flex justify-center items-center flex-col">
      <h3 class="">{title}</h3>
      <p class="text-3xl">
        {percent}
        <span class="text-xs">%</span>
      </p>
    </div>
  );
}
