interface NormalLinkButtonType {
  title: string;
  url: string;
}

export default function NormalLinkButton({ title, url }: NormalLinkButtonType) {
  return (
    <div class="inline-block flex justify-center border-rounded borer-kn_l_blue border-2 rounded-xl p-2">
      <a
        href={url}
        class="text-2xl text-center px-2 hover:text-kn duration-500"
      >
        {title}
      </a>
    </div>
  );
}
