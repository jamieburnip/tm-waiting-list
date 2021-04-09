/**
 * Not using a __app or __document as they wouldn't be utilised right now.
 * Reboot the css with simple bootstrap reboot from github.
 */

import Reboot from "../style/reboot";
import { Wrapper, H1, H3, P } from "@components/Elements";
import WaitingListForm from "@components/WaitingListForm";
import Header from "@components/Header";

export default function IndexPage() {
  return (
    <div id="app">
      <Reboot />

      <Header />
      <main>
        <Wrapper>
          <H1>All Time Low tickets</H1>
          <H3>Looks like this batch of tickets has sold out!</H3>
          <P>
            Please use the form below to sign up for our waiting list and be
            notified as soon as new tickets are avalable.
          </P>
          <WaitingListForm />
        </Wrapper>
      </main>
    </div>
  );
}
