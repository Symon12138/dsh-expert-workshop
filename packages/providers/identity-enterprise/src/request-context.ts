import type { MembershipRole } from 'symon-studio-contracts';

/** Member information verified by the configured authentication backend. */
export interface VerifiedMember {
  readonly principalId: string;
  readonly organizationId: string;
  readonly active: boolean;
  readonly role?: MembershipRole;
}
