interface OperationCoreInfoWrapperType {
  title: string;
  unit: string; //単位
  total: number;
  change: number;
}

export default function OperationCoreInfoWrapper({
  title,
  unit,
  total,
  change,
}: OperationCoreInfoWrapperType) {
  return (
    <div class="flex justify-center items-center flex-col">
      <h3 class="">{title}</h3>
      <div class="flex justify-center">
        <p class="text-3xl">{total}</p>
        <div class="flex items-center flex-col">
          <p class="text-sm">
            ({change >= 0 ? "+" : ""}
            {change})
          </p>
          <p class="text-xs">{unit}</p>
        </div>
      </div>
    </div>
  );
}
