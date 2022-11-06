interface OperationCoreInfoWrapperType {
  title: string;
  unit: string; //単位
  number: number;
}

export default function OperationCoreInfoWrapper({
  title,
  unit,
  number,
}: OperationCoreInfoWrapperType) {
  return (
    <div class="flex justify-center items-center flex-col">
      <h3 class="">{title}</h3>
      <p class="text-3xl">
        {number}
        <span class="text-xs">{unit}</span>
      </p>
    </div>
  );
}
