import { FileEntity } from "@/services/api/types/file-entity";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type FileUploadInputProps = {
  error?: string;
  onChange: (value: FileEntity[] | null) => void;
  onBlur: () => void;
  value?: FileEntity[];
  disabled?: boolean;
  testId?: string;
  maxSize?: number;
};

function FileUploadInput(props: FileUploadInputProps) {
  const { onChange, value = [] } = props;
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
}

export default FileUploadInput;
