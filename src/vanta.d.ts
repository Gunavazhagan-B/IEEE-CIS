declare module "vanta/dist/vanta.globe.min" {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type VantaEffect = (opts: any) => { destroy(): void }
    const GLOBE: VantaEffect
    export default GLOBE
}
