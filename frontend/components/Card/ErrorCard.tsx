interface ErrorType {
  title: string;
  details: string;
}

export default function ApiError({ title, details }: ErrorType) {
  return (
    <div class="flex justify-center items-center basis-height">
      <div class="border-kn_black border-2 rounded-2xl  m-4 p-12">
        <h1 class="text-center text-2xl my-2">{title}</h1>
        <p class="text-center text-xl my-2">{details}</p>
      </div>
    </div>
  );
}
