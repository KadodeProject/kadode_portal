interface CSCardType {
  title: string;
  url: string;
}

export default function CSCard({ title, url }: CSCardType) {
  return (
    <div class="color-shadow-box">
      <a
        href={url}
        target="_blank"
        rel="noopener"
        class="text-2xl text-center px-2 hover:text-kn_l_blue duration-500 text-kn_black"
      >
        {title}
      </a>
    </div>
  );
}
