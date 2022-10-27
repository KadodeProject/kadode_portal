interface DescCardType {
  icon: string;
  title: string;
  children: ReactNode;
}

export default function DescCard({ icon, title, children }: DescCardType) {
  return (
    <div class=" desc-card">
      <h2 class="text-2xl mx-2 my-2">
        <span class="material-icons">{icon}</span>
        {title}
      </h2>
      <div class="ml-4 mr-2">{children}</div>
    </div>
  );
}
