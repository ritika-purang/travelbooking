import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoSrc from "./logo.png";

// ── Icons ─────────────────────────────────────────────────────────────────
const searchIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
);
const heartIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);
const chevronUp = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6" />
    </svg>
);
const chevronDown = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6" />
    </svg>
);
const thumbUp = (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
);
const thumbDown = (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z" />
        <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
    </svg>
);
const globeIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

// ── FAQ data ──────────────────────────────────────────────────────────────
interface FaqItem {
    id: string;
    question: string;
    answer: React.ReactNode;
}

const faqs: FaqItem[] = [
    {
        id: "search-flights",
        question: "How do I search for flights on Voyaka?",
        answer: (
            <>
                <p>We know you're looking for the best prices to choose the right flight for your trip.</p>
                <br />
                <p>To start your search, open up the search box and enter the city, station or country in the <strong>From</strong> and <strong>To</strong> fields. Enter the date in the <strong>Depart</strong> and <strong>Return</strong> fields, then click or tap the <strong>Search</strong> button to see all flights and prices.</p>
                <br />
                <p>When you've seen a suitable flight for your needs, you can click on <strong>Select</strong> and continue to enter all airlines and experiences you'd like to book directly with them.</p>
                <br />
                <p>You can filter, see a list of filters, and choose types of stops and departure times, to help you find the perfect flight. Our listing will help you compare options for your upcoming trip, and helps you decide on the most appropriate airlines to choose. If any flexibility is needed, you can use our Month-to-month view to find the cheapest time to travel.</p>
                <br />
                <p>We also provide smart tools to help you save even more on your trip. For more information, please refer to our <a href="#" style={{ color: "#0778e9" }}>Travel Disruption</a> guides.</p>
            </>
        ),
    },
    {
        id: "child-fares",
        question: "Child/infant fares and children travelling alone",
        answer: (
            <>
                <p style={{ fontWeight: 700, marginBottom: 8 }}>Child and infant fares</p>
                <p>When booking child or infant fares along with adults, we display our flight search results to show the total fares (the adult fare plus any fees to the infant fare given to us by the airline).</p>
                <br />
                <p>We'll show you the <strong>average price per person</strong>. The combination of the price of the whole group divided by the number of passengers (along with any fees and charges for children and infants).</p>
                <br />
                <p>Once you have selected a flight, you will be taken to the airline's or travel agent's website where you will see the same breakout for all fares and any booking fees remaining. It's important to check the fare breakdown the amount you pay shown on Voyaka.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 8 }}>Prices for children travelling alone</p>
                <p>Some airlines have different rules and prices for people under the age of 18 when travelling alone. You can check this by visiting the airline's website or their travel agent to find out. If you need help finding their contact details, you can check by clicking the link below.</p>
                <br />
                <p><a href="#" style={{ color: "#0778e9" }}>Find out more →</a></p>
            </>
        ),
    },
    {
        id: "multiple-destinations",
        question: "How do I search for multiple destinations?",
        answer: (
            <>
                <p>The Multi-city search option is available in the <strong>Destination</strong> field. First, enter the departure city, airport or region in the From field, then the destination city, airport or region in the To field. These will be the search for both on <strong>website</strong> and on <strong>mobile app</strong>. There is also a drop-down menu for each field.</p>
                <br />
                <p>Setting the multi-city search option will enable you to add multiple searches for different departure cities and dates.</p>
                <br />
                <p>For multi-city flights where you have more than one destination to consider, this is very easy. For example, you can add two flights between Paris to Rome, you can search flights in both cities and return on the one time itinerary.</p>
                <br />
                <p>We can also search for flights to each destination combined or in any part of the city. You can also search and return for the best price destination using the best cheapest return results.</p>
                <br />
                <p>More information on how to search for multiple destinations can be found in <a href="#" style={{ color: "#0778e9" }}>this article</a>.</p>
            </>
        ),
    },
    {
        id: "cheapest-prices",
        question: "How do I find the cheapest prices across a month?",
        answer: (
            <>
                <p>The monthly price feature lets you find the best deals by showing the cheapest prices across a month.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>How do I find the monthly prices feature?</p>
                <p>On our <strong>desktop website</strong>, you can find the monthly prices by visiting the Search field, then clicking <strong>Flexible Dates</strong>. Choose the month you'd like to travel and click to see the flights for that month.</p>
                <br />
                <p>On our <strong>mobile website</strong>, you can find the monthly prices by visiting the Search field then the <strong>Flexible Dates</strong> option. Choose the month you'd like to travel and they'll see the flights for that month.</p>
                <br />
                <p>On the <strong>app</strong> tap the calendar icon on the <strong>Select the month/date</strong> button and you'll see the prices for the month if there are any.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6, marginTop: 12 }}>The monthly prices feature</p>
                <p>The monthly prices feature is only given when it's active across other specific selected dates in those days. The calendar view shows you a grid of prices and dates for specific days and dates to these. This is not always available for specific searches.</p>
                <br />
                <p>It's also worth noting that flight ticket prices are <strong>availability</strong> they change, which means the prices in the results page might be different from what you paid in the last result. However, the monthly prices may show lower prices once results have been confirmed or found.</p>
                <br />
                <p>The prices shown in the monthly prices feature are based on pricing price only. We focus on the first available pricing that's specific in being found the most and price saving only.</p>
            </>
        ),
    },
    {
        id: "cabin-class",
        question: "First Class, Business Class or Premium Economy tickets",
        answer: (
            <>
                <p>You can choose First class (also known as <strong>First Class</strong>), Business Class, or Premium Economy options for flights in your search.</p>
                <br />
                <p>On our <strong>desktop and tablet websites</strong>, click on the Search or Travellers icon-label field to choose your cabin selection from the drop-down menu.</p>
                <br />
                <p>On our <strong>mobile app</strong>, select the cabin interface field and your preferred cabin type from the drop-down menu.</p>
                <br />
                <p>If you want to view results for another cabin class, select that selection in the drop-down menu and search again.</p>
                <br />
                <p>Note that certain airlines may have different class options and when you're searching for specific locations or dates.</p>
            </>
        ),
    },
    {
        id: "one-way",
        question: "How do I search for one-way flights?",
        answer: (
            <>
                <p>To search for one-way flights on Voyaka, follow these steps:</p>
                <br />
                <p>On the <strong>desktop website</strong>, click on the label in the Airport field. At the top left of the tab section, there is a return or One-way drop. Change to the <strong>One-way</strong> option by clicking the button at the top.</p>
                <br />
                <p>On the <strong>mobile website</strong>, select the <strong>Choose Mode</strong> form. On the next screen, you will see the option First trip drop-down by the departing city. Select the one-way option by clicking the button below.</p>
                <br />
                <p>On the <strong>mobile app</strong>, select one-way flights option (showing the top of the top of the screen). Swipe using the filter option, click on the departing city, select the one-way option, by clicking the <strong>Explore</strong> to the return field. After you have made your one-way travel date, you'll be and the position of the drop-down.</p>
            </>
        ),
    },
];




const faqsExtra: FaqItem[] = [
    {
        id: "recommended-provider",
        question: "Voyaka's 'Recommended Provider' Badge",
        answer: (
            <>
                <p>When browsing flights on Voyaka, you might notice a 'Recommended Provider' badge next to some online travel agents (OTAs). This badge is something a partner can pay for — it's earned through performance. It's our way of recognising OTA partners that consistently offer a reliable experience to travellers.</p>
                <br />
                <p>You won't see these badges next to airlines, which is intentional. Most travellers already know and trust all the brands, which are clearly labelled as "airlines" in our results. The Recommended Provider badge is designed specifically to help build confidence when choosing among OTAs.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>How do we decide who gets the badge?</p>
                <p>We assess providers using three equally weighted criteria:</p>
                <br />
                <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                    <li>
                        <p style={{ fontWeight: 700, marginBottom: 4 }}>Quality Rating Score</p>
                        <p>After someone clicks through to a travel provider from Voyaka, we collect feedback through a short survey. We also take into account any issues raised with our support team. These insights are combined to calculate an overall <a href="#" style={{ color: "#0778e9" }}>quality rating score</a>.</p>
                    </li>
                    <li>
                        <p style={{ fontWeight: 700, marginBottom: 4 }}>Price accuracy</p>
                        <p>We compare the price shown on Voyaka with the final prices listed on the OTA's site. A close match between the two is a key indicator of accuracy and transparency.</p>
                    </li>
                    <li>
                        <p style={{ fontWeight: 700, marginBottom: 4 }}>Booking follow-through</p>
                        <p>We look at how often travellers complete a booking after being redirected to a provider's site. High conversion rates suggest that travellers are seeing consistent pricing, good availability and a smooth booking experience.</p>
                    </li>
                </ol>
                <br />
                <p>Providers must meet minimum thresholds on all three factors to earn the badge. If they drop below on any one, the badge is automatically removed. These checks are refreshed monthly, with no manual intervention.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Can travel providers or Voyaka influence who gets the badge?</p>
                <p>No. The Recommended Provider Badge isn't sold and it's not awarded manually. It's triggered automatically by an algorithm, using the data outlined above. There's no room for negotiation or human input.</p>
                <br />
                <p>Providers can influence their eligibility, but only by improving the experience they offer. A strong performance across all three metrics increases the chance of earning (and retaining) the badge, which is exactly what it's intended to do.</p>
            </>
        ),
    },
    {
        id: "multi-transport",
        question: "Multi-transport on Voyaka",
        answer: (
            <>
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Multi-transport journeys on Voyaka</p>
                <p>In some instances, you can search for journeys on Voyaka that combine flights and trains into one trip. These multi-transport options may be cheaper or faster than flights alone.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Will my tickets be sent together?</p>
                <p>After booking on the travel provider's website, you'll receive one confirmation email with all your travel details. This may include separate tickets for each leg (e.g. one for the flight and one for the train), depending on the provider.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Are the transfers protected?</p>
                <p>No, transfers between modes of transport aren't protected. We'll always display the connection times on Voyaka, and we'll only show connections that leave you enough time to get from the first to make the transfer, as long as there are no major delays.</p>
                <br />
                <p>If your flight is delayed and you miss your train (or the other way round), the second part of your trip won't be relocated or refunded automatically. That's why we always recommend having travel insurance that covers delays and missed connections.</p>
                <br />
                <p>Some travel providers offer flexible train tickets, which may let you board a later train, but this isn't guaranteed. We recommend that travellers check the ticket terms on the travel provider's site before booking.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Are the airport and the rail station always in the same place?</p>
                <p>In some cases, yes — but not always. In some cities, the airport and the train station are in the same building or terminal. In others, you'll need to travel between them by local transport, like a bus, taxi or tram. If that's the case, it will always be made clear before you book on the travel provider's website.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Is any transport between the airport and the station included?</p>
                <p>Where any transport is required between the airport and train station, it's usually not included in your ticket. We recommend checking the travel provider's website before booking.</p>
                <br />
                <p>Some train operators offer free use of local public transport within a set time window, for example, a free tram or bus ride, but this varies, so we recommend that you check the travel provider's terms before booking.</p>
            </>
        ),
    },
    {
        id: "direct-flights",
        question: "Direct flights",
        answer: (
            <>
                <p>If you're looking for direct flights only (i.e. flight options without stops), here's how to do it:</p>
                <br />
                <p>On the <strong>desktop and mobile websites</strong>, under the field where you enter your destination, you'll find a box with <strong>Direct flights</strong> next to it. By selecting this box, you'll filter only direct options for your search.</p>
                <br />
                <p>On the <strong>mobile app</strong>, you'll find the direct flight option after you have entered your flight details. Enter your travel dates in the Depart and Return fields. Click on the Travellers field to enter the number of travellers and click on the Cabin class option to select <strong>Economy</strong> or another class. Click on the Magnifying glass icon and then a list of flight options will appear. On the next screen, above the flight search results, there are several filters such as <strong>Best</strong>, <strong>Cheapest</strong>, <strong>Fastest</strong> and <strong>Direct</strong>. Select Direct to filter direct flights only.</p>
            </>
        ),
    },
    {
        id: "provider-problem",
        question: "I've found a problem on a flight provider's website",
        answer: (
            <>
                <p>If you are seeing an error, or if you are having problems trying to complete a booking on a travel provider's website please contact them directly for support as we don't have any control over other websites. The search box below can help you find the contact details for the travel provider you booked with.</p>
            </>
        ),
    },
    {
        id: "group-bookings",
        question: "Group bookings",
        answer: (
            <>
                <p>On Voyaka, you can search for the best flights for your group of up to eight adult passengers plus up to eight children.</p>
                <br />
                <p>For more passengers, the airline or travel agent may require you to book by telephone or via a specialist tour or travel website. The airline or agent will then may need additional group terms and separate fare requirements, as well as a dedicated check-in to ensure that you get the best deal.</p>
                <br />
                <p>To find out more, we recommend searching on Voyaka to identify which airlines and travel agents sell your chosen route, and then contacting the provider directly prior to booking to check their policy.</p>
            </>
        ),
    },
    {
        id: "quality-rating",
        question: "Voyaka Quality Rating Score",
        answer: (
            <>
                <p style={{ fontWeight: 700, marginBottom: 6 }}>How is the rating calculated?</p>
                <p>After you've visited a travel provider either from Voyaka, as a one-stop you may be asking for feedback about your experience with that provider. We combine those scores to calculate any positive or negative feedback received by our Support team about each travel provider to generate an overall quality rating. To make sure that the quality rating is relevant and up-to-date, we only take into account feedback from the last 60 days and we refresh the scores weekly.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>What does the Quality Rating take into account?</p>
                <p>Some of the categories we collect traveller feedback about are:</p>
                <br />
                <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    <li><strong>Price accuracy and transparency:</strong> how well the prices on your search matches the prices on Voyaka on Skyscanner, and whether any fees and charges are clearly shown.</li>
                    <li><strong>Flight availability:</strong> whether flights selected on Skyscanner are consistently available on the provider route.</li>
                    <li><strong>Refunds quality:</strong> we use this assess the provider is able to during the booking process.</li>
                    <li><strong>No-value charge quality:</strong> whether the provider 'shares a clear' before or charge policy for search result? In this place easy to find during search results page.</li>
                    <li><strong>Payment experience:</strong> whether travellers are able to complete the payment process smoothly.</li>
                    <li><strong>Customer service and post-booking experience:</strong> how easy is it for travellers to contact the provider for help, as well as any concerns about other services and reliability.</li>
                </ul>
                <br />
                <p>Provider quality scores are independent of whether a Provider Quality Score if they fail to provide good service in these categories.</p>
                <br />
                <p><strong>Our ratings are never influenced</strong> by us, or by our travel providers. The scores are only ever calculated using feedback sent to us or taken from it. We never apply the same standards or the same rule apply to any provider shown on Skyscanner. It's completely unbiased, so you can always see a fair and accurate reflection of what other travellers think about each provider.</p>
            </>
        ),
    },
    {
        id: "self-transfer",
        question: "What does it mean when I see Self-transfer on Voyaka?",
        answer: (
            <>
                <p>At Voyaka, we want to help you have the best travel experiences possible. And we know that saving money on flights in one way to make a happy traveller.</p>
                <br />
                <p>So when you search for flights, we'll show you all the options to help you get the most value possible. Sometimes, we have cheaper options might carry some risk. That's why they cost less.</p>
                <br />
                <p>Before you book, we want to help you understand what you're signing up for.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Self-transfer</p>
                <p>A self-transfer flight means you'll have two or more flights to reach your destination. Two different airlines could operate the two flights, but not always. It's also possible that your second flight departs from another airport to the one you arrived at, so it's always best to check the rules. You'll then need to transfer yourself from one flight to the next.</p>
                <br />
                <p>To help you choose, we'll give you more detail about these flights on our search results.</p>
                <br />
                <p>If different airlines in these cancellations (i.e. TasTam, Star Alliance etc.) operate your flights, you won't rebook as a self-transfer flight. The airlines will transfer your bags and either reroute or reimburse you another flight if your first flight is delayed.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>What does a self-transfer mean for you?</p>
                <p>You'll keep have two tickets, each with separately cancellation or change policy. 'Everything' means deciding on cancellation of your first ticket, you may miss your second flight and have to buy another ticket.</p>
                <br />
                <p>Baggage allowances may also vary by ticket. At the end of your first flight, you'll need reach pick up your checked baggage and re-check it for your second flight. You might need to search in-destination page verify and destination applicable for international flights. You'll also sometimes need a visa if your connection is in a country that requires one.</p>
                <br />
                <p>In summary, self-transfer tickets often offer attractive prices, but you need to be aware of the above before committing your money.</p>
            </>
        ),
    },
    {
        id: "change-currency",
        question: "How do I change my currency?",
        answer: (
            <>
                <p>We have over 160 currencies available for you to choose from. If you wish to change your currency:</p>
                <br />
                <p>On the <strong>desktop website</strong>, click on the globe icon at the top of the page. You'll find the currency option in the pop-up box allowing you to select your preferred currency.</p>
                <br />
                <p>Access the flag/existing settings on the <strong>mobile website</strong> by either logging in to your profile then choosing the country flag to scroll down to the website footer.</p>
                <br />
                <p>To change the currency on the <strong>mobile app</strong>, navigate to your profile, then go to settings and look for the currency option.</p>
                <br />
                <p>Sometimes when clicking through to that travel provider's site, they might display the price in a different currency. Usually, you can change this in their site, but if your price has been redirected to a different currency, it could affect your trip and payment conversion. If you're unsure, you can click the provider's chat or help button before making your booking.</p>
            </>
        ),
    },
    {
        id: "book-in-currency",
        question: "Can I book in my currency?",
        answer: (
            <>
                <p>Voyaka supports over 160 currencies on our <strong>website</strong> and <strong>app</strong>.</p>
                <br />
                <p>But all airlines and travel agents may offer your preferred currency for booking. Some countries have a primary payment method (e.g. US, CAD and AU). We'll always try to make sure you see them in the currency you're paying in, once to those the travel provider's website.</p>
                <br />
                <p>If you use Flights on Skyscanner, you can book them with our travel provider in the displayed currency, and your bank or card issuer will set the exchange rate.</p>
                <br />
                <p>We would recommend you contact your bank or card issuer if you'd like to find out more about any exchange rates and possible fees you would have to pay (or those they could apply) to another currency.</p>
            </>
        ),
    },
    {
        id: "missing-currency",
        question: "Missing currency",
        answer: (
            <>
                <p>If you notice we're missing a currency on the please let us know via the button below and we will add it to the site and appear as soon as we can.</p>
            </>
        ),
    },
    {
        id: "mash-ups",
        question: "What are Mash-Ups?",
        answer: (
            <>
                <p>Here at Voyaka, we're all about helping you have the best travel experience possible. And we know that saving money on flights is one easy way to make a happy traveller.</p>
                <br />
                <p>For that reason, sometimes we'll show you what we call 'mash-ups'.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>What are mash-ups?</p>
                <p>These are routes where you fly with different airlines, because it's cheaper than booking with just one. For example:</p>
                <br />
                <p>If you wanted to fly by Paris to New York, we might find it's cheaper to fly out with British Airways and back with Virgin Atlantic, rather than buy a return ticket with one airline. This is called a <strong>turn-of-one-way</strong> mash-up. Just in case you're interested.</p>
                <br />
                <p>Another kind of mash-up is what we call a <strong>self-transfer</strong> or a <strong>non-protected transfer</strong>. For example:</p>
                <br />
                <p>If you wanted to fly London to Sydney, we might find it's cheaper to fly London to Dubai with Emirates, and then Dubai to Sydney with Qantas, rather than booking the whole route with one airline.</p>
                <br />
                <p>Pretty simple, right?</p>
                <br />
                <p>However, what's really important to bear in mind is that mash-ups are <strong>NOT</strong> codeshares. A codeshare is when the airlines have an alliance. If anything goes wrong with the route — a delay, say, or a strike — those airlines will help you out at no extra cost. But mash-ups DO NOT involve an airline alliance. So if something goes wrong with a mash-up, it could cost you more money.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Are mash-ups better than other tickets?</p>
                <p>It depends. Like we said, we'll show you mash-ups if they're cheaper, or sometimes we'll show you them if they're more convenient (such as, if the wait time between flights is shorter). However, like we also said, mash-ups can carry some risks.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>How do I find a mash-up?</p>
                <p>Ah-ha, that's an easy one.</p>
                <br />
                <p>You just search for flights on Voyaka as you normally would, and if we find a good mash-up, we'll automatically show it to you.</p>
                <br />
                <p>All mash-ups are marked with a message explaining there are multiple bookings required.</p>
                <br />
                <p>If you see a mash-up you like, before you hit that 'book' button, we just want to make sure you know the ins and outs first. This bit is very important.</p>
                <br />
                <p>Make sure you open up all the different parts of your journey <strong>BEFORE</strong> you book your first flight to double check there's still availability. Flights can sell out quickly and we want to make sure you can complete your trip.</p>
            </>
        ),
    },
    {
        id: "language-settings",
        question: "How do I change my language settings?",
        answer: (
            <>
                <p>Voyaka is available in more than 30 languages. If you wish to change your language settings, please follow these instructions:</p>
                <br />
                <p>On our <strong>desktop website</strong>, click on the globe icon at the top of the website. You'll see a drop-down list where you can select your preferred language.</p>
                <br />
                <p>On our <strong>mobile website</strong>, you can change the language by logging in to your profile and then clicking the flag to access the Regional settings, or you can also access the Regional settings by scrolling down to the website footer.</p>
                <br />
                <p>On our <strong>mobile app</strong>, the language will match the language selected in your phone settings. You must change the language in your phone settings to view that language in your Voyaka mobile app.</p>
            </>
        ),
    },
    {
        id: "change-password",
        question: "How do I change my password?",
        answer: (
            <>
                <p>You no longer need to use a password to access your Voyaka account. Instead, you can now use verification authentication. This method means you use identification/authentication to access your Voyaka account.</p>
                <br />
                <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    <li><strong>Apple</strong> — You will need to log in using your Apple ID which will then do two-factor authentication. Once you are logged into your Apple account, you will also need to enter your Apple ID password in your Voyaka account.</li>
                    <li><strong>Facebook</strong> — You will need to sign in to your Facebook account. Once logged in, you will need to enter your login again to access your Voyaka account.</li>
                    <li><strong>Google</strong> — You'll need to sign in to your Google account. Once logged in, you will need to enter your Google ID to access.</li>
                    <li><strong>Email</strong> — You can log in to your Voyaka account by entering your email address. After you enter your email address, we will send a link to the email address and you will be logged in.</li>
                </ul>
            </>
        ),
    },
    {
        id: "blocked-access",
        question: "Why have I been blocked from accessing the Voyaka website?",
        answer: (
            <>
                <p>Voyaka's website serves millions of travellers every day and doesn't have a detrimental affect on the service we're able to provide. To protect this, we use tools to block unusual or suspicious traffic using the website in a timely manner.</p>
                <br />
                <p>Occasionally, this may mean that a genuine user may have been wrongly flagged as a crawler. There can be a number of potential reasons including, but not limited to:</p>
                <br />
                <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    <li>You're using a VPN and you may have too much automated bot traffic in the past.</li>
                    <li>You're using an outdated browser speed which send short messages to read our site data.</li>
                    <li>You're using a shared internet connection that is also being used by someone who has automated Voyaka.</li>
                    <li>You're using an automated browser.</li>
                </ul>
                <br />
                <p>If you've been blocked by our system, please send proof of your IP address (this may help: <a href="http://www.whatismyip.com" style={{ color: "#0778e9" }}>http://www.whatismyip.com</a>), the website you're being redirected to (e.g. www.voyaka.com), and the date/time the blockage happened to our <a href="#" style={{ color: "#0778e9" }}>Contact Us button</a> and we will restore the site back and you'll be able to access it quickly.</p>
            </>
        ),
    },
    {
        id: "currency-redirect",
        question: "When I get redirected to a provider's website the currency is different",
        answer: (
            <>
                <p>Voyaka lets you choose your currency to find and compare flights, but some airlines and travel agent websites actively determine prices in another payment to confirm Skyscanner. If those flights are available on Skyscanner, you should be able to book them.</p>
                <br />
                <p>Please bear in mind that if you pay for a flight in a currency that's different from the currency your bank or card issuer uses, the currency conversion will be done by your bank or credit card company. They may use different exchange rates to Skyscanner, and they may charge a commission. You should contact your bank or card to find out about these exchange rates that will actually apply to you.</p>
            </>
        ),
    },
    {
        id: "problem-on-voyaka",
        question: "I've found a problem on Skyscanner",
        answer: (
            <>
                <p>We're sorry to hear that you've run into a problem using Skyscanner. We'd encourage you to have read through the below information, but if this doesn't help, please contact us giving as many details as you can (including screenshots if available), and our team will look into it.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Price problems</p>
                <p>Although we work hard to we don't full or accurate, we appreciate that a broad or inaccurate price transparency may be challenging to us. We'd recommend taking a look at these frequently asked questions at those websites, but if you found there's still something wrong, please get in touch.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Problems on a travel provider's website</p>
                <p>If you have a problem after being redirected to a travel provider's site and recommend contacting the travel provider you are working with. Skyscanner doesn't have any team to offer and feel as though it's helping visitors on various websites. If you're attempting to reach them, please get in touch via the button below and we will try to help.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Website not working</p>
                <p>The most common cause of website experience problems while waiting in a browser. Clearing your browser cache and cookies can often solve these issues. If this doesn't work, please get to touch and avoid (and) investigate further.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>App problems</p>
                <p>Uninstalling and reinstalling the app usually fixes 80% of app problems. We'd recommend trying this first, but please get in touch if it doesn't solve any problems.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Blocked from using Skyscanner</p>
                <p>We apologise if you've seen a message that Skyscanner is blocking you from using our service. Please contact us and provide your IP address, along with the browser and version of the app, and we'll look into it.</p>
                <br />
                <p style={{ fontWeight: 700, marginBottom: 6 }}>Missing airline, airport, route or travel provider</p>
                <p>If you think we're missing an airline, route or travel provider, please let us know the specific details. We'd recommend checking out the most comprehensive coverage out there, and we will always best to have everything you might be looking for.</p>
            </>
        ),
    },
];

const filterTabs = ["All", "Flights", "Browse", "Booking", "More"];

// ── Feedback row component ─────────────────────────────────────────────────
function FeedbackRow() {
    const [voted, setVoted] = useState<"yes" | "no" | null>(null);
    return (
        <div style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid #f0f0f0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <span style={{ fontSize: 12, color: "#6b7280", fontFamily: "'DM Sans',sans-serif" }}>Was this article helpful?</span>
                <div style={{ display: "flex", gap: 6 }}>
                    <button
                        onClick={() => setVoted("yes")}
                        style={{
                            display: "flex", alignItems: "center", gap: 4,
                            padding: "4px 12px", border: `1px solid ${voted === "yes" ? "#0778e9" : "#d1d5db"}`,
                            borderRadius: 5, background: voted === "yes" ? "#eef5ff" : "#fff",
                            color: voted === "yes" ? "#0778e9" : "#555",
                            fontSize: 12, fontFamily: "'DM Sans',sans-serif",
                            cursor: "pointer", transition: "all 0.14s",
                        }}
                    >{thumbUp} Yes</button>
                    <button
                        onClick={() => setVoted("no")}
                        style={{
                            display: "flex", alignItems: "center", gap: 4,
                            padding: "4px 12px", border: `1px solid ${voted === "no" ? "#0778e9" : "#d1d5db"}`,
                            borderRadius: 5, background: voted === "no" ? "#eef5ff" : "#fff",
                            color: voted === "no" ? "#0778e9" : "#555",
                            fontSize: 12, fontFamily: "'DM Sans',sans-serif",
                            cursor: "pointer", transition: "all 0.14s",
                        }}
                    >{thumbDown} No</button>
                </div>
            </div>
            <div style={{ textAlign: "right", marginTop: 6 }}>
                <a href="#" style={{ fontSize: 12, color: "#0778e9", fontFamily: "'DM Sans',sans-serif", textDecoration: "none" }}>Contact Us</a>
            </div>
        </div>
    );
}

// ── FAQ accordion item ─────────────────────────────────────────────────────
function FaqAccordion({ faq }: { faq: FaqItem }) {
    const [open, setOpen] = useState(false);
    return (

        <div style={{ borderBottom: "1px solid #e5e7eb" }}>



            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "16px 0", background: "none", border: "none", cursor: "pointer",
                    textAlign: "left", gap: 12,
                }}
            >
                <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 700, color: "#111827", lineHeight: 1.4 }}>

                    {faq.question}
                </span>
                <span style={{ color: "#6b7280", flexShrink: 0 }}>{open ? chevronUp : chevronDown}</span>
            </button>


            {open && (
                <div style={{ paddingBottom: 20 }}>

                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#374151", lineHeight: 1.75 }}>

                        {faq.answer}
                    </div>
                    <FeedbackRow />
                </div>
            )}
        </div>
    );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function Search() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    const allFaqs = [...faqs, ...faqsExtra];

    const filtered = allFaqs.filter(f =>
        activeFilter === "All" ||
        (activeFilter === "Flights" && ["search-flights", "one-way", "multiple-destinations", "cabin-class", "cheapest-prices", "direct-flights", "self-transfer", "mash-ups"].includes(f.id)) ||
        (activeFilter === "Browse" && ["multiple-destinations", "multi-transport", "mash-ups", "direct-flights"].includes(f.id)) ||
        (activeFilter === "Booking" && ["child-fares", "cabin-class", "recommended-provider", "provider-problem", "group-bookings", "book-in-currency"].includes(f.id)) ||
        (activeFilter === "More" && ["recommended-provider", "multi-transport", "provider-problem", "quality-rating", "change-currency", "missing-currency", "language-settings", "change-password", "blocked-access", "currency-redirect", "problem-on-voyaka"].includes(f.id))
    );

    const queried = searchQuery.trim()
        ? filtered.filter(f =>
            f.question.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : filtered;

    return (
        <div style={{ fontFamily: "'Sora','DM Sans',sans-serif", minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Top bar ── */
        .srch-topbar {
          background: #fff; border-bottom: 1px solid #e5e7eb;
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 32px; position: sticky; top: 0; z-index: 100;
        }
        .srch-logo-row { display: flex; align-items: center; gap: 8px; cursor: pointer; }
        .srch-logo-name { font-family: 'Sora',sans-serif; font-size: 17px; font-weight: 800; color: #0778e9; letter-spacing: -0.02em; }
        .srch-topbar-right { display: flex; align-items: center; gap: 14px; }
        .srch-nav-link { font-family: 'DM Sans',sans-serif; font-size: 13px; color: #555; cursor: pointer; text-decoration: none; }
        .srch-nav-link:hover { color: #0778e9; }
        .srch-heart { color: #0778e9; display: flex; align-items: center; }
        .srch-login-btn {
          background: #0778e9; color: #fff; border: none; border-radius: 6px;
          padding: 6px 16px; font-family: 'Sora',sans-serif; font-size: 13px;
          font-weight: 700; cursor: pointer; transition: background 0.14s;
        }
        .srch-login-btn:hover { background: #0558c0; }

        /* ── Hero ── */
        .srch-hero {
          background: #0e1a3a;
          padding: 32px 24px 36px;
          text-align: center;
        }
        .srch-hero h1 {
          color: #fff; font-family: 'Sora',sans-serif;
          font-size: clamp(22px,3.5vw,34px); font-weight: 800;
          margin-bottom: 20px; letter-spacing: -0.01em;
        }
        .srch-search-wrap {
          max-width: 440px; margin: 0 auto; position: relative;
        }
        .srch-search-input {
          width: 100%; padding: 10px 40px 10px 14px;
          border-radius: 8px; border: none; outline: none;
          font-family: 'DM Sans',sans-serif; font-size: 14px; color: #1a1a2e;
          background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.12);
        }
        .srch-search-input::placeholder { color: #b0b7c3; }
        .srch-search-icon {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          color: #9ca3af; pointer-events: none; display: flex; align-items: center;
        }

        /* ── Body ── */
        .srch-body { max-width: 680px; margin: 0 auto; padding: 28px 24px 60px; flex: 1; width: 100%; }

						
        .srch-page-title { font-family: 'Sora',sans-serif; font-size: 22px; font-weight: 800; color: #111827; margin-bottom: 14px; }

        /* Filter tabs */
        .srch-filters { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 20px; }
        .srch-filter-tab {
          padding: 5px 14px; border-radius: 20px; font-size: 13px; font-weight: 600;
          font-family: 'DM Sans',sans-serif; cursor: pointer; border: 1.5px solid #e5e7eb;
          background: #fff; color: #4b5563; transition: all 0.14s; user-select: none;
        }
        .srch-filter-tab:hover { border-color: #0778e9; color: #0778e9; }
        .srch-filter-tab.on { background: #3d4bc7; color: #fff; border-color: #3d4bc7; }

        /* FAQ list */
        .srch-faq-list { display: flex; flex-direction: column; }

        /* ── Footer (new design) ── */
        .srch-footer {
          background: #0e1a3a;
          color: #fff;
          padding: 48px clamp(20px, 6vw, 80px) 0;
        }
        .srch-ft-inner { max-width: 1100px; margin: 0 auto; }

        /* Brand row */
        .srch-ft-brand {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 36px;
        }
        .srch-ft-brand-name {
          font-family: 'Sora',sans-serif; font-size: 20px; font-weight: 700; color: #fff;
        }

        /* 4-column grid */
        .srch-ft-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .srch-ft-col-title {
          font-family: 'Sora',sans-serif;
          font-size: 13px; font-weight: 700; color: #fff;
          margin-bottom: 16px;
        }
        .srch-ft-links { display: flex; flex-direction: column; gap: 12px; }
        .srch-ft-links a {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-family: 'DM Sans',sans-serif;
          font-size: 13px;
          transition: color 0.14s;
        }
        .srch-ft-links a:hover { color: #fff; }
																																				  

        /* Locale + copyright bar */
        .srch-ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 16px 0;
          margin-top: 4px;
          background: #fff;
          padding: 14px clamp(20px, 6vw, 80px);
          margin: 0 calc(-1 * clamp(20px, 6vw, 80px));
        }
        .srch-ft-locale {
          display: flex; align-items: center; gap: 6px;
          font-family: 'DM Sans',sans-serif; font-size: 13px; color: #374151;
          background: #fff; border: 1px solid #e5e7eb;
          padding: 5px 12px; border-radius: 6px; cursor: pointer;
        }
        .srch-ft-copy {
          font-family: 'DM Sans',sans-serif; font-size: 13px; color: #6b7280;
        }

        /* No results */
        .srch-empty { text-align: center; padding: 40px 0; color: #9ca3af; font-family: 'DM Sans',sans-serif; font-size: 14px; }

        @media (max-width: 700px) {
          .srch-topbar { padding: 8px 16px; }
          .srch-ft-grid { grid-template-columns: 1fr 1fr; }
          .srch-nav-links-hide { display: none !important; }
          .srch-ft-bottom { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 420px) {
          .srch-ft-grid { grid-template-columns: 1fr; }
        }
      `}</style>

            {/* ── TOP BAR ── */}
            <div className="srch-topbar">
                <div className="srch-logo-row" onClick={() => navigate("/")}>
                    <img src={logoSrc} alt="Voyaka" style={{ width: 32, height: 32, borderRadius: 8, objectFit: "contain" }} />
                    <span className="srch-logo-name">Voyaka</span>
                </div>
                <div className="srch-topbar-right">


                    <span onClick={() => navigate("/")} style={{ cursor: "pointer", fontSize: "18px", color: "rgb(0,0,0)", fontWeight: 600 }}>


                        Home
                    </span>

                    <span className="srch-nav-link srch-nav-links-hide" onClick={() => navigate("/privacy")}
                        style={{ cursor: "pointer", fontSize: "18px", color: "rgb(0,0,0)", fontWeight: 600 }}>

                        Privacy Policies
                    </span>
                    <span className="srch-heart">{heartIcon}</span>
                    <button className="srch-login-btn" onClick={() => navigate("/signin")}>Log In</button>
                </div>
            </div>

            {/* ── HERO ── */}
            <div className="srch-hero">
                <h1>How can we help?</h1>
                <div className="srch-search-wrap">
                    <input
                        className="srch-search-input"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <span className="srch-search-icon">{searchIcon}</span>
                </div>
            </div>

            {/* ── BODY ── */}
            <div className="srch-body">
                <h2 className="srch-page-title">Searching</h2>

                {/* Filter tabs */}
                <div className="srch-filters">
                    {filterTabs.map((tab) => (
                        <span
                            key={tab}
                            className={`srch-filter-tab${activeFilter === tab ? " on" : ""}`}
                            onClick={() => setActiveFilter(tab)}
                        >{tab}</span>
                    ))}
                </div>

                {/* FAQ accordion */}
                <div className="srch-faq-list">
                    {queried.length > 0
                        ? queried.map((faq) => <FaqAccordion key={faq.id} faq={faq} />)
                        : (
                            <div className="srch-empty">
                                No articles found for "<strong>{searchQuery}</strong>". Try a different search term.
                            </div>
                        )
                    }
                </div>
            </div>

            {/* ── FOOTER (new design) ── */}
            <footer className="srch-footer">
                <div className="srch-ft-inner">
                    {/* Brand */}
                    <div className="srch-ft-brand">
                        <img
                            src={logoSrc}
                            alt="Voyaka"
                            style={{ width: 36, height: 36, borderRadius: 10, objectFit: "contain", background: "#fff", padding: 3 }}
                        />
                        <span className="srch-ft-brand-name">Voyaka</span>
                    </div>

                    {/* 4-column links */}
                    <div className="srch-ft-grid">






                        <div>
                            <div className="srch-ft-col-title">Travellers</div>
                            <div className="srch-ft-links">
                                <a href="#">Mobile</a>
                                <a href="#">Features</a>
                                <a href="#">Pricing</a>
                            </div>
                        </div>
                        <div>
                            <div className="srch-ft-col-title">About</div>
                            <div className="srch-ft-links">
                                <a href="#">About us</a>
                                <a href="#">How we work</a>
                                <a href="#">Careers</a>
                            </div>
                        </div>
                        <div>
                            <div className="srch-ft-col-title">Privacy</div>
                            <div className="srch-ft-links">
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/privacy"); }}>Privacy Policy</a>
                                <a href="#">Terms of service</a>
                                <a href="#">Cookie Policy</a>
                            </div>
                        </div>
                        <div>
                            <div className="srch-ft-col-title">Contact</div>
                            <div className="srch-ft-links">
                                <a href="#">Help</a>
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/search"); }}>FAQ</a>
                                <a href="#">Feedback</a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Locale + copyright bar */}
                <div className="srch-ft-bottom">
                    <div className="srch-ft-locale">
                        {globeIcon}
                        <span>Australia English (AU) $ AUD</span>
                    </div>
                    <span className="srch-ft-copy">© 2026 Voyaka · All rights reserved</span>
                </div>
            </footer>
        </div>
    );
}
