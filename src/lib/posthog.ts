import posthog from "posthog-js"

posthog.init(
 "YOUR_PROJECT_KEY",
 {
   api_host: "https://app.posthog.com"
 }
)

export default posthog