import LoadingButton from '@mui/lab/LoadingButton';
import './Button.scss';

export default function Button({
  onClick,
  type,
  loading,
  loadingIndicator,
  text,
  disabled,
  color,
}: any) {
  return (
    <LoadingButton
      className="button button--capitalize"
      variant="contained"
      color={color}
      disabled={disabled}
      onClick={onClick}
      loading={loading}
      loadingIndicator={loadingIndicator}
      type={type}
    >
      {text}
    </LoadingButton>
  );
}
