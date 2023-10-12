export function getDefaultValueByComponent(name: string) {
  switch(name) {
    case 'NumberInput':
      return 0;
    case 'UploadResponse':
      return [];
    default:
      return '';
  }
}