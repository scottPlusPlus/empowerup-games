export default function Faqs() {

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20" data-aos="fade-up">
          {/* Section header */}
          <div className="pb-12">
            <h2 className="h2">FAQs</h2>
          </div>

          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <FaqCard title="What is This?">
                <>
                  BirdSong is a third-party tool helping you be more effective and efficient connecting with people on Twitter.
                  Connect your Twitter Lists, and our AI will find the tweets most worth your response.
                  You can configure to send you a daily email with the most important tweets, or just visit our page to see your currently highlighted Tweets.
                </>
              </FaqCard>

              {/* Item */}
              <FaqCard title="What Types of Tweets do you Highlight?">
                <>
                  We specifically look for tweets that invite a response, or are talking about topics you can configure.
                  We've learned the best way to build community is to engage with conversations that are already happening, and Bird Song helps you find those conversations.
                </>
              </FaqCard>

              {/* Item */}
              <FaqCard title="What about Mastadon?">
                <>
                  We will launch first on Twitter, but will look to quickly expand to Mastadon and other platforms.
                </>
              </FaqCard>
            </div>

            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <FaqCard title="Why Do You Need My Email?">
                <>
                  Joining the Waitlist ensures you are notified as soon as we launch.
                  We will only email you to let you know that BirdSong is ready.
                  We will not sell or share your information with anyone else, or use it for any other purpose.
                </>
              </FaqCard>

              {/* Item */}
              <FaqCard title="I have more questions!">
                <>
                  Please <a className="text-blue-500 cursor-pointer" href="https://twitter.com/ScottPlusPlus">get in touch</a>, we'd love to discuss.
                </>
              </FaqCard>

              {/* Item */}
              {/* <FaqCard title="What is This?">
                <>
                  BirdSong is a third-party tool helping you be more effective and efficient connecting with people on Twitter.
                  Connect your Twitter Lists, and our AI will find the tweets most worth your response.
                  You can configure to send you a daily email with the most important tweets, or just visit our page to see your currently highlighted Tweets.
                </>
              </FaqCard> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqCard(props: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold">{props.title}</h4>
      <p className="text-slate-500">{props.children}</p>
    </div>
  )
}