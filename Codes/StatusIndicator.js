export default function StatusIndicator({ status }) {
  return status ? <p className="text-red-500">{status}</p> : null;
}
