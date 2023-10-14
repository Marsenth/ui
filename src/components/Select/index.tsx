import { SelectProps } from './interfaces';

export const Select = ({ disabled, onChange, options, value }: SelectProps) => {
  return (
    <select
      className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-800 text-gray-800 h-10 bg-white"
      value={value}
      disabled={disabled}
      onChange={onChange}
    >
      {!options.find((option) => option.value === value) && <option value=''>Elige una opción</option>}

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}