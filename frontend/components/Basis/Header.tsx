export default function Header({ title }: string) {
  return (
    <header>
      <a href="/">
        <h2 class="text-2xl my-2 ">
          かどでポータル
          {title ? " > " + title : ""}
        </h2>
      </a>
    </header>
  );
}
