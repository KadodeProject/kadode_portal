export default function Footer() {
  return (
    <footer>
      <p class="text-xs mt-2 mb-2">copyright 2022 usuyuki</p>
      <div class="flex justify-center  items-center flex-col md:flex-row">
        <a class="px-2 py-2" href="https://kado.day">
          かどで日記
        </a>
        <a class="px-2 py-2" href="https://wiki.kado.day">
          かどで日記総合wiki
        </a>
        <a class="px-2 py-2" href="/">
          かどでポータル
        </a>
        <a class="px-2 py-2" href="https://github.com/KadodeProject">
          かどで日記GitHub
        </a>
        <a class="px-2 py-2" href="https://note.com/kadoday">
          かどで日記公式note
        </a>
      </div>
      <a
        href="https://github.com/KadodeProject/kaode_portal"
        target="_blank"
        rel="noopener"
        class="mb-2"
      >
        GitHub
      </a>
    </footer>
  );
}
