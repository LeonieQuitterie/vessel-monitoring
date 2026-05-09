import { LineChart, Line, ResponsiveContainer } from 'recharts'
import type { TimeSeriesPoint } from '@/shared/types/common.types'

interface SparklineProps {
  data: TimeSeriesPoint[]
  color?: string
  height?: number
}

export const Sparkline = ({
  data,
  color = 'var(--accent-cyan)',
  height = 40,
}: SparklineProps) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={1.5}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}