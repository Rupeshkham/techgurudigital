import Link from "next/link";

export default function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <div className="container-fluid page-header mb-5">
      <div className="container">
        <h1 className="display-3 mb-4">{title}</h1>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>

            {breadcrumbs.map((item, index) => (
              <li
                key={index}
                className={`breadcrumb-item ${
                  item.active ? "active" : ""
                }`}
                aria-current={item.active ? "page" : undefined}
              >
                {item.href && !item.active ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
