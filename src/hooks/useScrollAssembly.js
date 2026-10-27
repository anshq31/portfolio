import { useEffect, useRef, useState } from 'react'

export function useScrollAssembly(threshold = 0.18) {
  const ref = useRef(null)
  const [assembled, setAssembled] = useState(false)
  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) { setAssembled(true); return }
    const observer = new IntersectionObserver(([entry]) => setAssembled(entry.isIntersecting), { threshold, rootMargin: '0px 0px -8% 0px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, assembled]
}
