import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts'

const data = [
  { subject: 'JS', A: 85, fullMark: 100 },
  { subject: 'Python', A: 80, fullMark: 100 },
  { subject: 'Java', A: 70, fullMark: 100 },
  { subject: 'React', A: 85, fullMark: 100 },
  { subject: 'Node', A: 75, fullMark: 100 },
  { subject: 'ML', A: 70, fullMark: 100 },
]

export default function SkillRadar() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
          <Radar name="Skill" dataKey="A" stroke="#7a5cff" fill="#7a5cff" fillOpacity={0.35} />
          <Tooltip contentStyle={{ background: 'rgba(15,23,42,.9)', border: '1px solid rgba(255,255,255,.1)', color: '#fff' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
