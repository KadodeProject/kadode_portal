export default function IndexHeadline({ title }: string) {
  return (
    <div class="flex justify-center">
      <h2 class="mx-4 text-3xl text-center mt-20 border-b-2 bg-kn_white border-dotted pb-2 px-2 rounded-xl border-kn_black">
        {title}
      </h2>
    </div>
  );
}
