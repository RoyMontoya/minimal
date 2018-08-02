import Stream from './presenter';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('Stream', () => {

  const props = {
    tracks: [{ title: 'x' }, { title: 'y' }],
  };

  it('shows two elements', () => {
    const element = shallow(<Stream { ...props } />);

    expect(element.find('.track')).to.have.length(2);
  });

});
