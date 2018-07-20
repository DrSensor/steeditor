import { SteeditorPost } from './../SteeditorPost';
import { SteemPost } from './../SteemPost';
import { steeditorizePost } from './steeditorizePost';

fdescribe('#core #steeditorize steeditorizePost', () => {
  let steemPost: SteemPost;

  beforeEach(() => {
    steemPost = {
      id: 1,
      author: '',
      permlink: '',
      category: '',
      parent_author: '',
      parent_permlink: '',
      title: '',
      body: '',
      json_metadata: '',
      last_update: '',
      created: '',
      active: '',
      last_payout: '',
      depth: 0,
      children: 0,
      net_rshares: 0,
      abs_rshares: 0,
      vote_rshares: 0,
      children_abs_rshares: 0,
      cashout_time: '',
      max_cashout_time: '',
      total_vote_weight: 0,
      reward_weight: 0,
      total_payout_value: '',
      curator_payout_value: '',
      author_rewards: 0,
      net_votes: 0,
      root_author: '',
      root_permlink: '',
      max_accepted_payout: '1.000 SBD',
      percent_steem_dollars: 0,
      allow_replies: true,
      allow_votes: true,
      allow_curation_rewards: true,
      beneficiaries: [],
      url: '',
      root_title: '',
      pending_payout_value: '',
      total_pending_payout_value: '',
      active_votes: [],
      replies: [],
      author_reputation: '',
      promoted: '',
      body_length: 0,
      reblogged_by: []
    };
  });

  it('should return object with correct properties (Steeditor post)', () => {
    const steeditorPost: SteeditorPost = steeditorizePost(steemPost);

    expect(steeditorPost.allowCurationRewards).toBeDefined();
    expect(steeditorPost.allowVotes).toBeDefined();
    expect(steeditorPost.beneficiaries).toBeDefined();
    expect(steeditorPost.body).toBeDefined();
    expect(steeditorPost.community).toBeDefined();
    expect(steeditorPost.jsonMetadata).toBeDefined();
    expect(steeditorPost.maxAcceptedPayout).toBeDefined();
    expect(steeditorPost.percentSteemDollars).toBeDefined();
    expect(steeditorPost.permlink).toBeDefined();
    expect(steeditorPost.tags).toBeDefined();
    expect(steeditorPost.thumbnailUrl).toBeDefined();
    expect(steeditorPost.title).toBeDefined();
  });

  it('should NOT mutate the original steemPost object', () => {
    steeditorizePost(steemPost);

    expect(steemPost).toEqual({
      id: 1,
      author: '',
      permlink: '',
      category: '',
      parent_author: '',
      parent_permlink: '',
      title: '',
      body: '',
      json_metadata: '',
      last_update: '',
      created: '',
      active: '',
      last_payout: '',
      depth: 0,
      children: 0,
      net_rshares: 0,
      abs_rshares: 0,
      vote_rshares: 0,
      children_abs_rshares: 0,
      cashout_time: '',
      max_cashout_time: '',
      total_vote_weight: 0,
      reward_weight: 0,
      total_payout_value: '',
      curator_payout_value: '',
      author_rewards: 0,
      net_votes: 0,
      root_author: '',
      root_permlink: '',
      max_accepted_payout: '1.000 SBD',
      percent_steem_dollars: 0,
      allow_replies: true,
      allow_votes: true,
      allow_curation_rewards: true,
      beneficiaries: [],
      url: '',
      root_title: '',
      pending_payout_value: '',
      total_pending_payout_value: '',
      active_votes: [],
      replies: [],
      author_reputation: '',
      promoted: '',
      body_length: 0,
      reblogged_by: []
    });
  });
});