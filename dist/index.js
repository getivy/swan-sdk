"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelPhysicalCardReason = exports.CanceledFundingSourceReason = exports.BusinessActivity = exports.BeneficiaryType = exports.BeneficiaryAccountStatus = exports.BeneficiaryAccountHolderType = exports.AuthorizationType = exports.AuthenticatorType = exports.AmlRiskLevel = exports.AccountVerificationStatus = exports.AccountStatus = exports.AccountStandingOrderOrderByFieldInput = exports.AccountReceivedDirectDebitOrderByFieldInput = exports.AccountOrderByFieldInput = exports.AccountMembershipStatus = exports.AccountMembershipsPermission = exports.AccountMembershipOrderByFieldInput = exports.AccountLanguage = exports.AccountHolderType = exports.AccountHolderStatus = exports.AccountHolderOrderByFieldInput = exports.AccountFundingLimitsReachedReason = exports.AccountCountry = exports.$ = exports.GRAPHQL_TYPE_SEPARATOR = exports.START_VAR_NAME = exports.resolverFor = exports.InternalArgsBuilt = exports.ResolveFromPath = exports.purifyGraphQLKey = exports.PrepareScalarPaths = exports.GraphQLError = exports.SEPARATOR = exports.traverseResponse = exports.decodeScalarsInResponse = exports.ZeusScalars = exports.Gql = exports.TypeFromSelector = exports.Selector = exports.ZeusSelect = exports.Zeus = exports.Subscription = exports.SubscriptionThunder = exports.Chain = exports.Thunder = exports.InternalsBuildQuery = exports.apiFetch = exports.apiSubscription = exports.HEADERS = exports.HOST = void 0;
exports.InternalDirectDebitSequence = exports.IndividualUltimateBeneficialOwnerTypeEnum = exports.IdentityDocumentType = exports.IdentificationStatus = exports.IdentificationsOrderByField = exports.IdentificationProcess = exports.IdentificationLevelInput = exports.IdentificationLevel = exports.IdentificationInvalidReason = exports.IBANStatus = exports.FundingSourceStatus = exports.FundingSourceOrderByFieldInput = exports.FundingLimitSettingsStatus = exports.FundingLimitSettingsChangeRequestStatus = exports.FundingLimitSettingsChangeRequestOrderByFieldInput = exports.FieldValidationError = exports.FeesTypeEnum = exports.ExternalAccountUsage = exports.ExternalAccountDataSourceType = exports.ExternalAccountBalanceType = exports.EnvType = exports.EmploymentStatus = exports.DocumentType = exports.DocumentReasonCode = exports.DocumentFileSide = exports.DirectDebitSequence = exports.DigitalizationType = exports.DigitalCardOrderByFieldInput = exports.CreditTransferMode = exports.ConsentStatus = exports.ConsentPurpose = exports.CompleteDigitalCardStatus = exports.CompanyType = exports.CloseAccountReasonType = exports.Category = exports.CashAccountType = exports.CardType = exports.CardTransactionCategory = exports.CardStatus = exports.CardSettingsBackgroundType = exports.CardProductStatus = exports.CardOrderByFieldInput = exports.CardDesignStatus = exports.CardDesignBackgroundType = exports.CardAuthorizationType = exports.CardAuthorizationOutcome = exports.CapitalDepositDocumentType = exports.CapitalDepositDocumentStatus = exports.CapitalDepositCaseStatus = exports.CapitalDepositCaseOrderByFieldInput = void 0;
exports.ReceivedDirectDebitMandateStatus = exports.ReceivedDirectDebitMandateScheme = exports.ProjectType = exports.ProjectStatus = exports.ProjectCardStatus = exports.ProjectCardSettingsBackgroundType = exports.ProductType = exports.PreferredNotificationChannel = exports.PhysicalCardStatus = exports.PendingDigitalCardStatus = exports.PaymentStatus = exports.PaymentProduct = exports.PaymentOrderByFieldInput = exports.PaymentMandateStatus = exports.PaymentMandateSequence = exports.PaymentMandateScheme = exports.PaymentMandateOrderByFieldInput = exports.PaymentMandateCanceledReason = exports.PaymentLinkSequenceType = exports.PaymentLevel = exports.PaymentAccountType = exports.PartnershipStatus = exports.PartnerCloseAccountReasonType = exports.OrderByDirection = exports.OnboardingStatus = exports.OnboardingState = exports.OnboardingOrderByFieldInput = exports.MonthlyPaymentVolume = exports.MonthlyIncome = exports.MerchantProfileStatus = exports.MerchantProfileOrderByFieldInput = exports.MerchantPaymentMethodType = exports.MerchantPaymentMethodStatus = exports.MerchantPaymentLinkStatus = exports.MerchantCategoryDescription = exports.MandateLanguage = exports.LegalDocumentType = exports.LegalDocumentStatus = exports.Language = exports.InvoiceType = exports.InvoiceStatus = exports.InvalidIbanCode = exports.InvalidArgumentRejectionCode = exports.InternationalCreditTransferRouteInput = exports.InternationalCreditTransferRoute = exports.InternationalCreditTransferDisplayLanguage = exports.InternalReceivedDirectDebitMandateSequence = exports.InternalReceivedDirectDebitMandateScheme = exports.InternalPaymentMandateSequence = exports.InternalPaymentMandateScheme = void 0;
exports.WebhookSubscriptionStatus = exports.WebhookSubscriptionCreationStatus = exports.WalletProviderType = exports.VerificationStatus = exports.VerificationFlow = exports.ValidationFieldErrorCode = exports.UserOrderByFieldInput = exports.UltimateBeneficialOwnerType = exports.TypeOfRepresentation = exports.TrustedBeneficiaryStatus = exports.TrustedBeneficiaryOrderByFieldInput = exports.TransactionTypeEnum = exports.TransactionStatus = exports.TransactionsOrderByField = exports.TransactionSide = exports.TransactionReasonCode = exports.TitleEnum = exports.SwanIdentificationStatus = exports.SuspendReceivedDirectDebitMandatedRejectionReason = exports.SuspendAccountReasonType = exports.SupportingDocumentType = exports.SupportingDocumentStatus = exports.SupportingDocumentPurposeEnum = exports.SupportingDocumentCommunicationLanguageSettings = exports.SupportingDocumentCollectMode = exports.SupportingDocumentCollectionStatus = exports.StatusText = exports.StatementType = exports.StatementStatus = exports.StatementPeriod = exports.StandingOrderStatus = exports.StandingOrderPeriod = exports.SpendingLimitType = exports.SpendingLimitPeriodInput = exports.SpendingLimitPeriod = exports.SimulationCardType = exports.ShareholderType = exports.ShareholderStatus = exports.SEPAReceivedDirectDebitMandateSequence = exports.SEPAReceivedDirectDebitMandateScheme = exports.SEPAPaymentMandateSequence = exports.SEPAPaymentMandateScheme = exports.SEPADirectDebitScheme = exports.RequestMerchantProfileUpdateStatus = exports.ReleasedReason = exports.RejectedVerificationReason = exports.RejectedReasonCode = exports.RejectedFundingSourceReason = exports.RefundRejectionCode = void 0;
const const_1 = require("./const");
exports.HOST = 'https://api.swan.io/sandbox-partner/graphql';
exports.HEADERS = {};
const apiSubscription = (options) => (query) => {
    try {
        const queryString = options[0] + '?query=' + encodeURIComponent(query);
        const wsString = queryString.replace('http', 'ws');
        const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
        const webSocketOptions = options[1]?.websocket || [host];
        const ws = new WebSocket(...webSocketOptions);
        return {
            ws,
            on: (e) => {
                ws.onmessage = (event) => {
                    if (event.data) {
                        const parsed = JSON.parse(event.data);
                        const data = parsed.data;
                        return e(data);
                    }
                };
            },
            off: (e) => {
                ws.onclose = e;
            },
            error: (e) => {
                ws.onerror = e;
            },
            open: (e) => {
                ws.onopen = e;
            },
        };
    }
    catch {
        throw new Error('No websockets implemented');
    }
};
exports.apiSubscription = apiSubscription;
const handleFetchResponse = (response) => {
    if (!response.ok) {
        return new Promise((_, reject) => {
            response
                .text()
                .then(text => {
                try {
                    reject(JSON.parse(text));
                }
                catch (err) {
                    reject(text);
                }
            })
                .catch(reject);
        });
    }
    return response.json();
};
const apiFetch = (options) => (query, variables = {}) => {
    const fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
        return fetch(`${options[0]}?query=${encodeURIComponent(query)}`, fetchOptions)
            .then(handleFetchResponse)
            .then((response) => {
            if (response.errors) {
                throw new GraphQLError(response);
            }
            return response.data;
        });
    }
    return fetch(`${options[0]}`, {
        body: JSON.stringify({ query, variables }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        ...fetchOptions,
    })
        .then(handleFetchResponse)
        .then((response) => {
        if (response.errors) {
            throw new GraphQLError(response);
        }
        return response.data;
    });
};
exports.apiFetch = apiFetch;
const InternalsBuildQuery = ({ ops, props, returns, options, scalars, }) => {
    const ibb = (k, o, p = '', root = true, vars = []) => {
        const keyForPath = (0, exports.purifyGraphQLKey)(k);
        const newPath = [p, keyForPath].join(exports.SEPARATOR);
        if (!o) {
            return '';
        }
        if (typeof o === 'boolean' || typeof o === 'number') {
            return k;
        }
        if (typeof o === 'string') {
            return `${k} ${o}`;
        }
        if (Array.isArray(o)) {
            const args = (0, exports.InternalArgsBuilt)({
                props,
                returns,
                ops,
                scalars,
                vars,
            })(o[0], newPath);
            return `${ibb(args ? `${k}(${args})` : k, o[1], p, false, vars)}`;
        }
        if (k === '__alias') {
            return Object.entries(o)
                .map(([alias, objectUnderAlias]) => {
                if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
                    throw new Error('Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}');
                }
                const operationName = Object.keys(objectUnderAlias)[0];
                const operation = objectUnderAlias[operationName];
                return ibb(`${alias}:${operationName}`, operation, p, false, vars);
            })
                .join('\n');
        }
        const hasOperationName = root && options?.operationName ? ' ' + options.operationName : '';
        const keyForDirectives = o.__directives ?? '';
        const query = `{${Object.entries(o)
            .filter(([k]) => k !== '__directives')
            .map(e => ibb(...e, [p, `field<>${keyForPath}`].join(exports.SEPARATOR), false, vars))
            .join('\n')}}`;
        if (!root) {
            return `${k} ${keyForDirectives}${hasOperationName} ${query}`;
        }
        const varsString = vars.map(v => `${v.name}: ${v.graphQLType}`).join(', ');
        return `${k} ${keyForDirectives}${hasOperationName}${varsString ? `(${varsString})` : ''} ${query}`;
    };
    return ibb;
};
exports.InternalsBuildQuery = InternalsBuildQuery;
const Thunder = (fn) => (operation, graphqlOptions) => (o, ops) => fn((0, exports.Zeus)(operation, o, {
    operationOptions: ops,
    scalars: graphqlOptions?.scalars,
}), ops?.variables).then(data => {
    if (graphqlOptions?.scalars) {
        return (0, exports.decodeScalarsInResponse)({
            response: data,
            initialOp: operation,
            initialZeusQuery: o,
            returns: const_1.ReturnTypes,
            scalars: graphqlOptions.scalars,
            ops: const_1.Ops,
        });
    }
    return data;
});
exports.Thunder = Thunder;
const Chain = (...options) => (0, exports.Thunder)((0, exports.apiFetch)(options));
exports.Chain = Chain;
const SubscriptionThunder = (fn) => (operation, graphqlOptions) => (o, ops) => {
    const returnedFunction = fn((0, exports.Zeus)(operation, o, {
        operationOptions: ops,
        scalars: graphqlOptions?.scalars,
    }));
    if (returnedFunction?.on && graphqlOptions?.scalars) {
        const wrapped = returnedFunction.on;
        returnedFunction.on = (fnToCall) => wrapped((data) => {
            if (graphqlOptions?.scalars) {
                return fnToCall((0, exports.decodeScalarsInResponse)({
                    response: data,
                    initialOp: operation,
                    initialZeusQuery: o,
                    returns: const_1.ReturnTypes,
                    scalars: graphqlOptions.scalars,
                    ops: const_1.Ops,
                }));
            }
            return fnToCall(data);
        });
    }
    return returnedFunction;
};
exports.SubscriptionThunder = SubscriptionThunder;
const Subscription = (...options) => (0, exports.SubscriptionThunder)((0, exports.apiSubscription)(options));
exports.Subscription = Subscription;
const Zeus = (operation, o, ops) => (0, exports.InternalsBuildQuery)({
    props: const_1.AllTypesProps,
    returns: const_1.ReturnTypes,
    ops: const_1.Ops,
    options: ops?.operationOptions,
    scalars: ops?.scalars,
})(operation, o);
exports.Zeus = Zeus;
const ZeusSelect = () => ((t) => t);
exports.ZeusSelect = ZeusSelect;
const Selector = (key) => key && (0, exports.ZeusSelect)();
exports.Selector = Selector;
const TypeFromSelector = (key) => key && (0, exports.ZeusSelect)();
exports.TypeFromSelector = TypeFromSelector;
exports.Gql = (0, exports.Chain)(exports.HOST, {
    headers: {
        'Content-Type': 'application/json',
        ...exports.HEADERS,
    },
});
exports.ZeusScalars = (0, exports.ZeusSelect)();
const decodeScalarsInResponse = ({ response, scalars, returns, ops, initialZeusQuery, initialOp, }) => {
    if (!scalars) {
        return response;
    }
    const builder = (0, exports.PrepareScalarPaths)({
        ops,
        returns,
    });
    const scalarPaths = builder(initialOp, ops[initialOp], initialZeusQuery);
    if (scalarPaths) {
        const r = (0, exports.traverseResponse)({ scalarPaths, resolvers: scalars })(initialOp, response, [
            ops[initialOp],
        ]);
        return r;
    }
    return response;
};
exports.decodeScalarsInResponse = decodeScalarsInResponse;
const traverseResponse = ({ resolvers, scalarPaths, }) => {
    const ibb = (k, o, p = []) => {
        if (Array.isArray(o)) {
            return o.map(eachO => ibb(k, eachO, p));
        }
        if (o == null) {
            return o;
        }
        const scalarPathString = p.join(exports.SEPARATOR);
        const currentScalarString = scalarPaths[scalarPathString];
        if (currentScalarString) {
            const currentDecoder = resolvers[currentScalarString.split('.')[1]]?.decode;
            if (currentDecoder) {
                return currentDecoder(o);
            }
        }
        if (typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string' || !o) {
            return o;
        }
        const entries = Object.entries(o).map(([k, v]) => [k, ibb(k, v, [...p, (0, exports.purifyGraphQLKey)(k)])]);
        const objectFromEntries = entries.reduce((a, [k, v]) => {
            a[k] = v;
            return a;
        }, {});
        return objectFromEntries;
    };
    return ibb;
};
exports.traverseResponse = traverseResponse;
exports.SEPARATOR = '|';
class GraphQLError extends Error {
    response;
    constructor(response) {
        super('');
        this.response = response;
        console.error(response);
    }
    toString() {
        return 'GraphQL Response Error';
    }
}
exports.GraphQLError = GraphQLError;
const ExtractScalar = (mappedParts, returns) => {
    if (mappedParts.length === 0) {
        return;
    }
    const oKey = mappedParts[0];
    const returnP1 = returns[oKey];
    if (typeof returnP1 === 'object') {
        const returnP2 = returnP1[mappedParts[1]];
        if (returnP2) {
            return ExtractScalar([returnP2, ...mappedParts.slice(2)], returns);
        }
        return undefined;
    }
    return returnP1;
};
const PrepareScalarPaths = ({ ops, returns, }) => {
    const ibb = (k, originalKey, o, p = [], pOriginals = [], root = true) => {
        if (!o) {
            return;
        }
        if (typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string') {
            const extractionArray = [...pOriginals, originalKey];
            const isScalar = ExtractScalar(extractionArray, returns);
            if (isScalar?.startsWith('scalar')) {
                const partOfTree = {
                    [[...p, k].join(exports.SEPARATOR)]: isScalar,
                };
                return partOfTree;
            }
            return {};
        }
        if (Array.isArray(o)) {
            return ibb(k, k, o[1], p, pOriginals, false);
        }
        if (k === '__alias') {
            return Object.entries(o)
                .map(([alias, objectUnderAlias]) => {
                if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
                    throw new Error('Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}');
                }
                const operationName = Object.keys(objectUnderAlias)[0];
                const operation = objectUnderAlias[operationName];
                return ibb(alias, operationName, operation, p, pOriginals, false);
            })
                .reduce((a, b) => ({
                ...a,
                ...b,
            }));
        }
        const keyName = root ? ops[k] : k;
        return Object.entries(o)
            .filter(([k]) => k !== '__directives')
            .map(([k, v]) => {
            // Inline fragments shouldn't be added to the path as they aren't a field
            const isInlineFragment = originalKey.match(/^...\s*on/) != null;
            return ibb(k, k, v, isInlineFragment ? p : [...p, (0, exports.purifyGraphQLKey)(keyName || k)], isInlineFragment ? pOriginals : [...pOriginals, (0, exports.purifyGraphQLKey)(originalKey)], false);
        })
            .reduce((a, b) => ({
            ...a,
            ...b,
        }));
    };
    return ibb;
};
exports.PrepareScalarPaths = PrepareScalarPaths;
const purifyGraphQLKey = (k) => k.replace(/\([^)]*\)/g, '').replace(/^[^:]*\:/g, '');
exports.purifyGraphQLKey = purifyGraphQLKey;
const mapPart = (p) => {
    const [isArg, isField] = p.split('<>');
    if (isField) {
        return {
            v: isField,
            __type: 'field',
        };
    }
    return {
        v: isArg,
        __type: 'arg',
    };
};
const ResolveFromPath = (props, returns, ops) => {
    const ResolvePropsType = (mappedParts) => {
        const oKey = ops[mappedParts[0].v];
        const propsP1 = oKey ? props[oKey] : props[mappedParts[0].v];
        if (propsP1 === 'enum' && mappedParts.length === 1) {
            return 'enum';
        }
        if (typeof propsP1 === 'string' && propsP1.startsWith('scalar.') && mappedParts.length === 1) {
            return propsP1;
        }
        if (typeof propsP1 === 'object') {
            if (mappedParts.length < 2) {
                return 'not';
            }
            const propsP2 = propsP1[mappedParts[1].v];
            if (typeof propsP2 === 'string') {
                return rpp(`${propsP2}${exports.SEPARATOR}${mappedParts
                    .slice(2)
                    .map(mp => mp.v)
                    .join(exports.SEPARATOR)}`);
            }
            if (typeof propsP2 === 'object') {
                if (mappedParts.length < 3) {
                    return 'not';
                }
                const propsP3 = propsP2[mappedParts[2].v];
                if (propsP3 && mappedParts[2].__type === 'arg') {
                    return rpp(`${propsP3}${exports.SEPARATOR}${mappedParts
                        .slice(3)
                        .map(mp => mp.v)
                        .join(exports.SEPARATOR)}`);
                }
            }
        }
    };
    const ResolveReturnType = (mappedParts) => {
        if (mappedParts.length === 0) {
            return 'not';
        }
        const oKey = ops[mappedParts[0].v];
        const returnP1 = oKey ? returns[oKey] : returns[mappedParts[0].v];
        if (typeof returnP1 === 'object') {
            if (mappedParts.length < 2)
                return 'not';
            const returnP2 = returnP1[mappedParts[1].v];
            if (returnP2) {
                return rpp(`${returnP2}${exports.SEPARATOR}${mappedParts
                    .slice(2)
                    .map(mp => mp.v)
                    .join(exports.SEPARATOR)}`);
            }
        }
    };
    const rpp = (path) => {
        const parts = path.split(exports.SEPARATOR).filter(l => l.length > 0);
        const mappedParts = parts.map(mapPart);
        const propsP1 = ResolvePropsType(mappedParts);
        if (propsP1) {
            return propsP1;
        }
        const returnP1 = ResolveReturnType(mappedParts);
        if (returnP1) {
            return returnP1;
        }
        return 'not';
    };
    return rpp;
};
exports.ResolveFromPath = ResolveFromPath;
const InternalArgsBuilt = ({ props, ops, returns, scalars, vars, }) => {
    const arb = (a, p = '', root = true) => {
        if (typeof a === 'string') {
            if (a.startsWith(exports.START_VAR_NAME)) {
                const [varName, graphQLType] = a.replace(exports.START_VAR_NAME, '$').split(exports.GRAPHQL_TYPE_SEPARATOR);
                const v = vars.find(v => v.name === varName);
                if (!v) {
                    vars.push({
                        name: varName,
                        graphQLType,
                    });
                }
                else {
                    if (v.graphQLType !== graphQLType) {
                        throw new Error(`Invalid variable exists with two different GraphQL Types, "${v.graphQLType}" and ${graphQLType}`);
                    }
                }
                return varName;
            }
        }
        const checkType = (0, exports.ResolveFromPath)(props, returns, ops)(p);
        if (checkType.startsWith('scalar.')) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [_, ...splittedScalar] = checkType.split('.');
            const scalarKey = splittedScalar.join('.');
            return scalars?.[scalarKey]?.encode?.(a) || JSON.stringify(a);
        }
        if (Array.isArray(a)) {
            return `[${a.map(arr => arb(arr, p, false)).join(', ')}]`;
        }
        if (typeof a === 'string') {
            if (checkType === 'enum') {
                return a;
            }
            return `${JSON.stringify(a)}`;
        }
        if (typeof a === 'object') {
            if (a === null) {
                return `null`;
            }
            const returnedObjectString = Object.entries(a)
                .filter(([, v]) => typeof v !== 'undefined')
                .map(([k, v]) => `${k}: ${arb(v, [p, k].join(exports.SEPARATOR), false)}`)
                .join(',\n');
            if (!root) {
                return `{${returnedObjectString}}`;
            }
            return returnedObjectString;
        }
        return `${a}`;
    };
    return arb;
};
exports.InternalArgsBuilt = InternalArgsBuilt;
const resolverFor = (type, field, fn) => fn;
exports.resolverFor = resolverFor;
exports.START_VAR_NAME = `$ZEUS_VAR`;
exports.GRAPHQL_TYPE_SEPARATOR = `__$GRAPHQL__`;
const $ = (name, graphqlType) => {
    return (exports.START_VAR_NAME + name + exports.GRAPHQL_TYPE_SEPARATOR + graphqlType);
};
exports.$ = $;
/** Refers to the country of the account. It will determine the country code of the local IBAN of the account.

Available Account Country: CCA3 */
var AccountCountry;
(function (AccountCountry) {
    AccountCountry["FRA"] = "FRA";
    AccountCountry["DEU"] = "DEU";
    AccountCountry["ESP"] = "ESP";
    AccountCountry["NLD"] = "NLD";
})(AccountCountry || (exports.AccountCountry = AccountCountry = {}));
var AccountFundingLimitsReachedReason;
(function (AccountFundingLimitsReachedReason) {
    AccountFundingLimitsReachedReason["InstantFundingLimitExceededRejection"] = "InstantFundingLimitExceededRejection";
    AccountFundingLimitsReachedReason["FundingLimitExceededRejection"] = "FundingLimitExceededRejection";
    AccountFundingLimitsReachedReason["ProjectInstantFundingLimitExceededRejection"] = "ProjectInstantFundingLimitExceededRejection";
    AccountFundingLimitsReachedReason["ProjectFundingLimitExceededRejection"] = "ProjectFundingLimitExceededRejection";
    AccountFundingLimitsReachedReason["GlobalInstantFundingLimitExceededRejection"] = "GlobalInstantFundingLimitExceededRejection";
    AccountFundingLimitsReachedReason["GlobalFundingLimitExceededRejection"] = "GlobalFundingLimitExceededRejection";
    AccountFundingLimitsReachedReason["InsufficientFundsRejection"] = "InsufficientFundsRejection";
})(AccountFundingLimitsReachedReason || (exports.AccountFundingLimitsReachedReason = AccountFundingLimitsReachedReason = {}));
/** Field we can use when ordering that can be applied when listing account holders */
var AccountHolderOrderByFieldInput;
(function (AccountHolderOrderByFieldInput) {
    AccountHolderOrderByFieldInput["createdAt"] = "createdAt";
    AccountHolderOrderByFieldInput["updatedAt"] = "updatedAt";
})(AccountHolderOrderByFieldInput || (exports.AccountHolderOrderByFieldInput = AccountHolderOrderByFieldInput = {}));
/** Account holder status. */
var AccountHolderStatus;
(function (AccountHolderStatus) {
    AccountHolderStatus["Enabled"] = "Enabled";
    AccountHolderStatus["Suspended"] = "Suspended";
    AccountHolderStatus["Canceled"] = "Canceled";
})(AccountHolderStatus || (exports.AccountHolderStatus = AccountHolderStatus = {}));
/** Account holder type */
var AccountHolderType;
(function (AccountHolderType) {
    AccountHolderType["Individual"] = "Individual";
    AccountHolderType["Company"] = "Company";
})(AccountHolderType || (exports.AccountHolderType = AccountHolderType = {}));
/** Language: ISO 639-1 language code */
var AccountLanguage;
(function (AccountLanguage) {
    AccountLanguage["de"] = "de";
    AccountLanguage["en"] = "en";
    AccountLanguage["fr"] = "fr";
    AccountLanguage["it"] = "it";
    AccountLanguage["nl"] = "nl";
    AccountLanguage["es"] = "es";
    AccountLanguage["pt"] = "pt";
})(AccountLanguage || (exports.AccountLanguage = AccountLanguage = {}));
/** Field we can use when ordering that can be applied when listing account memberships */
var AccountMembershipOrderByFieldInput;
(function (AccountMembershipOrderByFieldInput) {
    AccountMembershipOrderByFieldInput["createdAt"] = "createdAt";
    AccountMembershipOrderByFieldInput["updatedAt"] = "updatedAt";
})(AccountMembershipOrderByFieldInput || (exports.AccountMembershipOrderByFieldInput = AccountMembershipOrderByFieldInput = {}));
/** List of account memberships permission */
var AccountMembershipsPermission;
(function (AccountMembershipsPermission) {
    AccountMembershipsPermission["canInitiatePayments"] = "canInitiatePayments";
    AccountMembershipsPermission["canManageAccountMembership"] = "canManageAccountMembership";
    AccountMembershipsPermission["canManageCards"] = "canManageCards";
    AccountMembershipsPermission["canManageBeneficiaries"] = "canManageBeneficiaries";
    AccountMembershipsPermission["canViewAccount"] = "canViewAccount";
})(AccountMembershipsPermission || (exports.AccountMembershipsPermission = AccountMembershipsPermission = {}));
/** AccountMembership enabled */
var AccountMembershipStatus;
(function (AccountMembershipStatus) {
    AccountMembershipStatus["ConsentPending"] = "ConsentPending";
    AccountMembershipStatus["InvitationSent"] = "InvitationSent";
    AccountMembershipStatus["BindingUserError"] = "BindingUserError";
    AccountMembershipStatus["Enabled"] = "Enabled";
    AccountMembershipStatus["Suspended"] = "Suspended";
    AccountMembershipStatus["Disabled"] = "Disabled";
})(AccountMembershipStatus || (exports.AccountMembershipStatus = AccountMembershipStatus = {}));
/** Fields that can be used when ordering accounts */
var AccountOrderByFieldInput;
(function (AccountOrderByFieldInput) {
    AccountOrderByFieldInput["createdAt"] = "createdAt";
    AccountOrderByFieldInput["updatedAt"] = "updatedAt";
})(AccountOrderByFieldInput || (exports.AccountOrderByFieldInput = AccountOrderByFieldInput = {}));
/** Field we can use when ordering that can be applied when listing receives direct debit mandate results */
var AccountReceivedDirectDebitOrderByFieldInput;
(function (AccountReceivedDirectDebitOrderByFieldInput) {
    AccountReceivedDirectDebitOrderByFieldInput["createdAt"] = "createdAt";
    AccountReceivedDirectDebitOrderByFieldInput["updatedAt"] = "updatedAt";
})(AccountReceivedDirectDebitOrderByFieldInput || (exports.AccountReceivedDirectDebitOrderByFieldInput = AccountReceivedDirectDebitOrderByFieldInput = {}));
/** Field we can use when ordering that can be applied when listing standing order results */
var AccountStandingOrderOrderByFieldInput;
(function (AccountStandingOrderOrderByFieldInput) {
    AccountStandingOrderOrderByFieldInput["createdAt"] = "createdAt";
    AccountStandingOrderOrderByFieldInput["updatedAt"] = "updatedAt";
})(AccountStandingOrderOrderByFieldInput || (exports.AccountStandingOrderOrderByFieldInput = AccountStandingOrderOrderByFieldInput = {}));
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["Opened"] = "Opened";
    AccountStatus["Suspended"] = "Suspended";
    AccountStatus["Closing"] = "Closing";
    AccountStatus["Closed"] = "Closed";
})(AccountStatus || (exports.AccountStatus = AccountStatus = {}));
/** Account Verification Status */
var AccountVerificationStatus;
(function (AccountVerificationStatus) {
    AccountVerificationStatus["PendingVerification"] = "PendingVerification";
    AccountVerificationStatus["PendingReview"] = "PendingReview";
    AccountVerificationStatus["Verified"] = "Verified";
    AccountVerificationStatus["Rejected"] = "Rejected";
})(AccountVerificationStatus || (exports.AccountVerificationStatus = AccountVerificationStatus = {}));
var AmlRiskLevel;
(function (AmlRiskLevel) {
    AmlRiskLevel["Low"] = "Low";
    AmlRiskLevel["Medium"] = "Medium";
    AmlRiskLevel["High"] = "High";
    AmlRiskLevel["TooHigh"] = "TooHigh";
})(AmlRiskLevel || (exports.AmlRiskLevel = AmlRiskLevel = {}));
var AuthenticatorType;
(function (AuthenticatorType) {
    AuthenticatorType["SwanWeb"] = "SwanWeb";
    AuthenticatorType["Swan"] = "Swan";
})(AuthenticatorType || (exports.AuthenticatorType = AuthenticatorType = {}));
/** Type of the card authorization transaction */
var AuthorizationType;
(function (AuthorizationType) {
    AuthorizationType["Classic"] = "Classic";
    AuthorizationType["PreAuthorization"] = "PreAuthorization";
    AuthorizationType["DataRequest"] = "DataRequest";
})(AuthorizationType || (exports.AuthorizationType = AuthorizationType = {}));
/** BeneficiaryAccountHolderType */
var BeneficiaryAccountHolderType;
(function (BeneficiaryAccountHolderType) {
    BeneficiaryAccountHolderType["Individual"] = "Individual";
    BeneficiaryAccountHolderType["Company"] = "Company";
    BeneficiaryAccountHolderType["Unknown"] = "Unknown";
})(BeneficiaryAccountHolderType || (exports.BeneficiaryAccountHolderType = BeneficiaryAccountHolderType = {}));
/** BeneficiaryAccountStatus */
var BeneficiaryAccountStatus;
(function (BeneficiaryAccountStatus) {
    BeneficiaryAccountStatus["Active"] = "Active";
    BeneficiaryAccountStatus["Inactive"] = "Inactive";
    BeneficiaryAccountStatus["Unknown"] = "Unknown";
})(BeneficiaryAccountStatus || (exports.BeneficiaryAccountStatus = BeneficiaryAccountStatus = {}));
/** Beneficiary type */
var BeneficiaryType;
(function (BeneficiaryType) {
    BeneficiaryType["Internal"] = "Internal";
    BeneficiaryType["International"] = "International";
    BeneficiaryType["Sepa"] = "Sepa";
})(BeneficiaryType || (exports.BeneficiaryType = BeneficiaryType = {}));
/** Business activity. */
var BusinessActivity;
(function (BusinessActivity) {
    BusinessActivity["AdministrativeServices"] = "AdministrativeServices";
    BusinessActivity["Agriculture"] = "Agriculture";
    BusinessActivity["Arts"] = "Arts";
    BusinessActivity["BusinessAndRetail"] = "BusinessAndRetail";
    BusinessActivity["Construction"] = "Construction";
    BusinessActivity["Education"] = "Education";
    BusinessActivity["ElectricalDistributionAndWaterSupply"] = "ElectricalDistributionAndWaterSupply";
    BusinessActivity["FinancialAndInsuranceOperations"] = "FinancialAndInsuranceOperations";
    BusinessActivity["Health"] = "Health";
    BusinessActivity["Housekeeping"] = "Housekeeping";
    BusinessActivity["InformationAndCommunication"] = "InformationAndCommunication";
    BusinessActivity["LodgingAndFoodServices"] = "LodgingAndFoodServices";
    BusinessActivity["ManufacturingAndMining"] = "ManufacturingAndMining";
    BusinessActivity["Other"] = "Other";
    BusinessActivity["PublicAdministration"] = "PublicAdministration";
    BusinessActivity["RealEstate"] = "RealEstate";
    BusinessActivity["ScientificActivities"] = "ScientificActivities";
    BusinessActivity["Transportation"] = "Transportation";
})(BusinessActivity || (exports.BusinessActivity = BusinessActivity = {}));
/** Funding Source Canceled Reason */
var CanceledFundingSourceReason;
(function (CanceledFundingSourceReason) {
    CanceledFundingSourceReason["UserCanceled"] = "UserCanceled";
    CanceledFundingSourceReason["MandateExpired"] = "MandateExpired";
    CanceledFundingSourceReason["MandateCanceled"] = "MandateCanceled";
})(CanceledFundingSourceReason || (exports.CanceledFundingSourceReason = CanceledFundingSourceReason = {}));
/** reason why the physical card is canceled */
var CancelPhysicalCardReason;
(function (CancelPhysicalCardReason) {
    CancelPhysicalCardReason["NonReceived"] = "NonReceived";
    CancelPhysicalCardReason["Lost"] = "Lost";
    CancelPhysicalCardReason["Stolen"] = "Stolen";
    CancelPhysicalCardReason["Defected"] = "Defected";
    CancelPhysicalCardReason["Blocked"] = "Blocked";
})(CancelPhysicalCardReason || (exports.CancelPhysicalCardReason = CancelPhysicalCardReason = {}));
/** Field we can use when ordering that can be applied when listing capital deposit cases */
var CapitalDepositCaseOrderByFieldInput;
(function (CapitalDepositCaseOrderByFieldInput) {
    CapitalDepositCaseOrderByFieldInput["id"] = "id";
    CapitalDepositCaseOrderByFieldInput["createdAt"] = "createdAt";
    CapitalDepositCaseOrderByFieldInput["updatedAt"] = "updatedAt";
})(CapitalDepositCaseOrderByFieldInput || (exports.CapitalDepositCaseOrderByFieldInput = CapitalDepositCaseOrderByFieldInput = {}));
/** Status of a capital deposit case. */
var CapitalDepositCaseStatus;
(function (CapitalDepositCaseStatus) {
    CapitalDepositCaseStatus["Initiated"] = "Initiated";
    CapitalDepositCaseStatus["WaitingForRequirements"] = "WaitingForRequirements";
    CapitalDepositCaseStatus["WaitingForShareDepositCertificate"] = "WaitingForShareDepositCertificate";
    CapitalDepositCaseStatus["WaitingForRegisterExtract"] = "WaitingForRegisterExtract";
    CapitalDepositCaseStatus["WaitingForNotaryTransfer"] = "WaitingForNotaryTransfer";
    CapitalDepositCaseStatus["Completed"] = "Completed";
})(CapitalDepositCaseStatus || (exports.CapitalDepositCaseStatus = CapitalDepositCaseStatus = {}));
/** Status of the Capital Deposit Case */
var CapitalDepositDocumentStatus;
(function (CapitalDepositDocumentStatus) {
    CapitalDepositDocumentStatus["Pending"] = "Pending";
    CapitalDepositDocumentStatus["Uploaded"] = "Uploaded";
    CapitalDepositDocumentStatus["Validated"] = "Validated";
    CapitalDepositDocumentStatus["Refused"] = "Refused";
})(CapitalDepositDocumentStatus || (exports.CapitalDepositDocumentStatus = CapitalDepositDocumentStatus = {}));
/** Type of the document. */
var CapitalDepositDocumentType;
(function (CapitalDepositDocumentType) {
    CapitalDepositDocumentType["ArticlesOfIncorporation"] = "ArticlesOfIncorporation";
    CapitalDepositDocumentType["RegisterExtract"] = "RegisterExtract";
    CapitalDepositDocumentType["ProofOfIdentity"] = "ProofOfIdentity";
    CapitalDepositDocumentType["CorporateIncomeTaxReturn"] = "CorporateIncomeTaxReturn";
    CapitalDepositDocumentType["ProofOfIndividualAddress"] = "ProofOfIndividualAddress";
    CapitalDepositDocumentType["CompanyLeaseAgreement"] = "CompanyLeaseAgreement";
    CapitalDepositDocumentType["CapitalShareDepositCertificate"] = "CapitalShareDepositCertificate";
    CapitalDepositDocumentType["PowerOfAttorney"] = "PowerOfAttorney";
})(CapitalDepositDocumentType || (exports.CapitalDepositDocumentType = CapitalDepositDocumentType = {}));
var CardAuthorizationOutcome;
(function (CardAuthorizationOutcome) {
    CardAuthorizationOutcome["Accepted"] = "Accepted";
    CardAuthorizationOutcome["AccountClosed"] = "AccountClosed";
    CardAuthorizationOutcome["AccountSuspended"] = "AccountSuspended";
    CardAuthorizationOutcome["AtmWithdrawalAmountLimitExceeded"] = "AtmWithdrawalAmountLimitExceeded";
    CardAuthorizationOutcome["AtmWithdrawalNumberLimitExceeded"] = "AtmWithdrawalNumberLimitExceeded";
    CardAuthorizationOutcome["AuthorizationConsumed"] = "AuthorizationConsumed";
    CardAuthorizationOutcome["AuthorizationUpdated"] = "AuthorizationUpdated";
    CardAuthorizationOutcome["AuthorizationValidityExceeded"] = "AuthorizationValidityExceeded";
    CardAuthorizationOutcome["CardCanceled"] = "CardCanceled";
    CardAuthorizationOutcome["CardExpired"] = "CardExpired";
    CardAuthorizationOutcome["CardholderCancelation"] = "CardholderCancelation";
    CardAuthorizationOutcome["CardLost"] = "CardLost";
    CardAuthorizationOutcome["CardNotProvidedToCardholderOrClosed"] = "CardNotProvidedToCardholderOrClosed";
    CardAuthorizationOutcome["CardNumberInvalid"] = "CardNumberInvalid";
    CardAuthorizationOutcome["CardOpposedCardStolen"] = "CardOpposedCardStolen";
    CardAuthorizationOutcome["CardOutOfOrder"] = "CardOutOfOrder";
    CardAuthorizationOutcome["CardTemporarilyLocked"] = "CardTemporarilyLocked";
    CardAuthorizationOutcome["CardUnknown"] = "CardUnknown";
    CardAuthorizationOutcome["DoNotHonor"] = "DoNotHonor";
    CardAuthorizationOutcome["eMoneyAccount"] = "eMoneyAccount";
    CardAuthorizationOutcome["eMoneyAccountLimitExceeded"] = "eMoneyAccountLimitExceeded";
    CardAuthorizationOutcome["IncorrectPinCodeAttemptsExceeded"] = "IncorrectPinCodeAttemptsExceeded";
    CardAuthorizationOutcome["InsufficientFunds"] = "InsufficientFunds";
    CardAuthorizationOutcome["MerchantInvalid"] = "MerchantInvalid";
    CardAuthorizationOutcome["MerchantShouldResubmitAuthorization"] = "MerchantShouldResubmitAuthorization";
    CardAuthorizationOutcome["MiscellaneousReason"] = "MiscellaneousReason";
    CardAuthorizationOutcome["OriginalTransactionNotFound"] = "OriginalTransactionNotFound";
    CardAuthorizationOutcome["PartialApproval"] = "PartialApproval";
    CardAuthorizationOutcome["PartialCancelation"] = "PartialCancelation";
    CardAuthorizationOutcome["PeriodAmountLimitExceeded"] = "PeriodAmountLimitExceeded";
    CardAuthorizationOutcome["PeriodNumberTransactionLimitExceeded"] = "PeriodNumberTransactionLimitExceeded";
    CardAuthorizationOutcome["PinCodeInvalid"] = "PinCodeInvalid";
    CardAuthorizationOutcome["PinCodeValidationImpossible"] = "PinCodeValidationImpossible";
    CardAuthorizationOutcome["SpendingLimitsReached"] = "SpendingLimitsReached";
    CardAuthorizationOutcome["TechnicalError"] = "TechnicalError";
    CardAuthorizationOutcome["TransactionAmountLimitExceeded"] = "TransactionAmountLimitExceeded";
    CardAuthorizationOutcome["TransactionCurrencyIncorrect"] = "TransactionCurrencyIncorrect";
    CardAuthorizationOutcome["TransactionInvalid"] = "TransactionInvalid";
    CardAuthorizationOutcome["TransactionNotAuthorizedForCardholder"] = "TransactionNotAuthorizedForCardholder";
    CardAuthorizationOutcome["TransactionNotAuthorizedForPointOfSale"] = "TransactionNotAuthorizedForPointOfSale";
})(CardAuthorizationOutcome || (exports.CardAuthorizationOutcome = CardAuthorizationOutcome = {}));
var CardAuthorizationType;
(function (CardAuthorizationType) {
    CardAuthorizationType["Classic"] = "Classic";
    CardAuthorizationType["PreAuthorization"] = "PreAuthorization";
    CardAuthorizationType["DataRequest"] = "DataRequest";
})(CardAuthorizationType || (exports.CardAuthorizationType = CardAuthorizationType = {}));
/** Project Card Design Background Type */
var CardDesignBackgroundType;
(function (CardDesignBackgroundType) {
    CardDesignBackgroundType["Black"] = "Black";
    CardDesignBackgroundType["Silver"] = "Silver";
    CardDesignBackgroundType["Custom"] = "Custom";
})(CardDesignBackgroundType || (exports.CardDesignBackgroundType = CardDesignBackgroundType = {}));
/** Card designs Status */
var CardDesignStatus;
(function (CardDesignStatus) {
    CardDesignStatus["Draft"] = "Draft";
    CardDesignStatus["Enabled"] = "Enabled";
    CardDesignStatus["Disabled"] = "Disabled";
    CardDesignStatus["ToReview"] = "ToReview";
})(CardDesignStatus || (exports.CardDesignStatus = CardDesignStatus = {}));
/** Field we can use when ordering that can be applied when listing cards */
var CardOrderByFieldInput;
(function (CardOrderByFieldInput) {
    CardOrderByFieldInput["id"] = "id";
    CardOrderByFieldInput["createdAt"] = "createdAt";
    CardOrderByFieldInput["updatedAt"] = "updatedAt";
})(CardOrderByFieldInput || (exports.CardOrderByFieldInput = CardOrderByFieldInput = {}));
/** Card Product Status */
var CardProductStatus;
(function (CardProductStatus) {
    CardProductStatus["PendingReview"] = "PendingReview";
    CardProductStatus["Enabled"] = "Enabled";
    CardProductStatus["Suspended"] = "Suspended";
    CardProductStatus["Disabled"] = "Disabled";
})(CardProductStatus || (exports.CardProductStatus = CardProductStatus = {}));
/** Card Settings Background Type */
var CardSettingsBackgroundType;
(function (CardSettingsBackgroundType) {
    CardSettingsBackgroundType["Black"] = "Black";
    CardSettingsBackgroundType["Silver"] = "Silver";
    CardSettingsBackgroundType["Custom"] = "Custom";
})(CardSettingsBackgroundType || (exports.CardSettingsBackgroundType = CardSettingsBackgroundType = {}));
/** Card Status */
var CardStatus;
(function (CardStatus) {
    CardStatus["ConsentPending"] = "ConsentPending";
    CardStatus["Processing"] = "Processing";
    CardStatus["Enabled"] = "Enabled";
    CardStatus["Canceled"] = "Canceled";
    CardStatus["Canceling"] = "Canceling";
})(CardStatus || (exports.CardStatus = CardStatus = {}));
var CardTransactionCategory;
(function (CardTransactionCategory) {
    CardTransactionCategory["InStore"] = "InStore";
    CardTransactionCategory["eCommerce"] = "eCommerce";
    CardTransactionCategory["eCommerceWith3DS"] = "eCommerceWith3DS";
    CardTransactionCategory["Withdrawal"] = "Withdrawal";
    CardTransactionCategory["Other"] = "Other";
})(CardTransactionCategory || (exports.CardTransactionCategory = CardTransactionCategory = {}));
/** Card Type */
var CardType;
(function (CardType) {
    CardType["Virtual"] = "Virtual";
    CardType["VirtualAndPhysical"] = "VirtualAndPhysical";
    CardType["SingleUseVirtual"] = "SingleUseVirtual";
})(CardType || (exports.CardType = CardType = {}));
/** Cash account type (Always Current) */
var CashAccountType;
(function (CashAccountType) {
    CashAccountType["Current"] = "Current";
    CashAccountType["CashPayment"] = "CashPayment";
    CashAccountType["Charges"] = "Charges";
    CashAccountType["CashIncome"] = "CashIncome";
    CashAccountType["Commission"] = "Commission";
    CashAccountType["ClearingParticipantSettlementAccount"] = "ClearingParticipantSettlementAccount";
    CashAccountType["LimitedLiquiditySavingsAccount"] = "LimitedLiquiditySavingsAccount";
    CashAccountType["Loan"] = "Loan";
    CashAccountType["MarginalLending"] = "MarginalLending";
    CashAccountType["MoneyMarket"] = "MoneyMarket";
    CashAccountType["NonResidentExternal"] = "NonResidentExternal";
    CashAccountType["Overdraft"] = "Overdraft";
    CashAccountType["OverNightDeposit"] = "OverNightDeposit";
    CashAccountType["OtherAccount"] = "OtherAccount";
    CashAccountType["Settlement"] = "Settlement";
    CashAccountType["Salary"] = "Salary";
    CashAccountType["Savings"] = "Savings";
    CashAccountType["Tax"] = "Tax";
    CashAccountType["TransactingAccount"] = "TransactingAccount";
    CashAccountType["CashTrading"] = "CashTrading";
})(CashAccountType || (exports.CashAccountType = CashAccountType = {}));
/** Payment flow available options */
var Category;
(function (Category) {
    Category["InStore"] = "InStore";
    Category["eCommerce"] = "eCommerce";
    Category["eCommerceWith3DS"] = "eCommerceWith3DS";
    Category["Withdrawal"] = "Withdrawal";
    Category["Other"] = "Other";
})(Category || (exports.Category = Category = {}));
/** Specific type for closing account action */
var CloseAccountReasonType;
(function (CloseAccountReasonType) {
    CloseAccountReasonType["ComplianceReason"] = "ComplianceReason";
    CloseAccountReasonType["PartnerReason"] = "PartnerReason";
    CloseAccountReasonType["Inactivity"] = "Inactivity";
    CloseAccountReasonType["CapitalDepositReason"] = "CapitalDepositReason";
})(CloseAccountReasonType || (exports.CloseAccountReasonType = CloseAccountReasonType = {}));
/** Type of company. */
var CompanyType;
(function (CompanyType) {
    CompanyType["Association"] = "Association";
    CompanyType["Company"] = "Company";
    CompanyType["HomeOwnerAssociation"] = "HomeOwnerAssociation";
    CompanyType["Other"] = "Other";
    CompanyType["SelfEmployed"] = "SelfEmployed";
})(CompanyType || (exports.CompanyType = CompanyType = {}));
/** Complete Digital Card Status */
var CompleteDigitalCardStatus;
(function (CompleteDigitalCardStatus) {
    CompleteDigitalCardStatus["Enabled"] = "Enabled";
    CompleteDigitalCardStatus["Suspended"] = "Suspended";
    CompleteDigitalCardStatus["Canceled"] = "Canceled";
})(CompleteDigitalCardStatus || (exports.CompleteDigitalCardStatus = CompleteDigitalCardStatus = {}));
/** Purpose of a consent */
var ConsentPurpose;
(function (ConsentPurpose) {
    ConsentPurpose["AcceptPartnershipConditions"] = "AcceptPartnershipConditions";
    ConsentPurpose["AddAccountMembership"] = "AddAccountMembership";
    ConsentPurpose["AddAccountMemberships"] = "AddAccountMemberships";
    ConsentPurpose["AddBeneficiary"] = "AddBeneficiary";
    ConsentPurpose["AddCard"] = "AddCard";
    ConsentPurpose["AddCards"] = "AddCards";
    ConsentPurpose["AddDigitalCard"] = "AddDigitalCard";
    ConsentPurpose["ActivatePhysicalCard"] = "ActivatePhysicalCard";
    ConsentPurpose["CloseAccount"] = "CloseAccount";
    ConsentPurpose["InitPayment"] = "InitPayment";
    ConsentPurpose["PrintPhysicalCard"] = "PrintPhysicalCard";
    ConsentPurpose["ResumeAccountMembership"] = "ResumeAccountMembership";
    ConsentPurpose["ResumePhysicalCard"] = "ResumePhysicalCard";
    ConsentPurpose["ScheduleStandingOrder"] = "ScheduleStandingOrder";
    ConsentPurpose["UpdateAccountMembership"] = "UpdateAccountMembership";
    ConsentPurpose["UpdateCard"] = "UpdateCard";
    ConsentPurpose["UpdateServerConsentProjectSettings"] = "UpdateServerConsentProjectSettings";
    ConsentPurpose["ViewCardNumbers"] = "ViewCardNumbers";
    ConsentPurpose["ViewPhysicalCardPin"] = "ViewPhysicalCardPin";
    ConsentPurpose["EnableMandate"] = "EnableMandate";
    ConsentPurpose["AddDirectDebitPaymentMandate"] = "AddDirectDebitPaymentMandate";
    ConsentPurpose["InitiateFundingRequest"] = "InitiateFundingRequest";
    ConsentPurpose["InitiateInstantFundingRequest"] = "InitiateInstantFundingRequest";
    ConsentPurpose["InitiateInternationalCreditTransfer"] = "InitiateInternationalCreditTransfer";
    ConsentPurpose["ConsentToMultipleConsents"] = "ConsentToMultipleConsents";
})(ConsentPurpose || (exports.ConsentPurpose = ConsentPurpose = {}));
/** Status of a consent */
var ConsentStatus;
(function (ConsentStatus) {
    ConsentStatus["Accepted"] = "Accepted";
    ConsentStatus["CustomerRefused"] = "CustomerRefused";
    ConsentStatus["OperationCommitting"] = "OperationCommitting";
    ConsentStatus["CredentialRefused"] = "CredentialRefused";
    ConsentStatus["Created"] = "Created";
    ConsentStatus["Started"] = "Started";
    ConsentStatus["Expired"] = "Expired";
    ConsentStatus["Failed"] = "Failed";
    ConsentStatus["Canceled"] = "Canceled";
})(ConsentStatus || (exports.ConsentStatus = ConsentStatus = {}));
var CreditTransferMode;
(function (CreditTransferMode) {
    CreditTransferMode["InstantWithoutFallback"] = "InstantWithoutFallback";
    CreditTransferMode["InstantWithFallback"] = "InstantWithFallback";
    CreditTransferMode["Regular"] = "Regular";
})(CreditTransferMode || (exports.CreditTransferMode = CreditTransferMode = {}));
/** Field we can use when ordering that can be applied when listing digital cards */
var DigitalCardOrderByFieldInput;
(function (DigitalCardOrderByFieldInput) {
    DigitalCardOrderByFieldInput["id"] = "id";
    DigitalCardOrderByFieldInput["createdAt"] = "createdAt";
    DigitalCardOrderByFieldInput["updatedAt"] = "updatedAt";
})(DigitalCardOrderByFieldInput || (exports.DigitalCardOrderByFieldInput = DigitalCardOrderByFieldInput = {}));
/** Digitalization Type */
var DigitalizationType;
(function (DigitalizationType) {
    DigitalizationType["Manual"] = "Manual";
    DigitalizationType["CardOnFile"] = "CardOnFile";
    DigitalizationType["InApp"] = "InApp";
    DigitalizationType["Unknown"] = "Unknown";
})(DigitalizationType || (exports.DigitalizationType = DigitalizationType = {}));
var DirectDebitSequence;
(function (DirectDebitSequence) {
    DirectDebitSequence["OneOff"] = "OneOff";
    DirectDebitSequence["Recurring"] = "Recurring";
    DirectDebitSequence["Recurrent"] = "Recurrent";
})(DirectDebitSequence || (exports.DirectDebitSequence = DirectDebitSequence = {}));
/** From which side the document picture was taken */
var DocumentFileSide;
(function (DocumentFileSide) {
    DocumentFileSide["SideA"] = "SideA";
    DocumentFileSide["SideB"] = "SideB";
    DocumentFileSide["BothSides"] = "BothSides";
    DocumentFileSide["Unknown"] = "Unknown";
})(DocumentFileSide || (exports.DocumentFileSide = DocumentFileSide = {}));
/** Reason code of the document. */
var DocumentReasonCode;
(function (DocumentReasonCode) {
    DocumentReasonCode["CompanyNameMismatch"] = "CompanyNameMismatch";
    DocumentReasonCode["DeclaredAmountMismatch"] = "DeclaredAmountMismatch";
    DocumentReasonCode["ExpiredDocument"] = "ExpiredDocument";
    DocumentReasonCode["InvalidAddress"] = "InvalidAddress";
    DocumentReasonCode["InvalidDocument"] = "InvalidDocument";
    DocumentReasonCode["InvalidOrMissingData"] = "InvalidOrMissingData";
    DocumentReasonCode["MissingAccommodationProviderId"] = "MissingAccommodationProviderId";
    DocumentReasonCode["MissingAccommodationProviderIdLetter"] = "MissingAccommodationProviderIdLetter";
    DocumentReasonCode["MissingAccommodationProviderLetter"] = "MissingAccommodationProviderLetter";
    DocumentReasonCode["UnacceptableDocument"] = "UnacceptableDocument";
})(DocumentReasonCode || (exports.DocumentReasonCode = DocumentReasonCode = {}));
/** The type of the document */
var DocumentType;
(function (DocumentType) {
    DocumentType["IdCard"] = "IdCard";
    DocumentType["Passport"] = "Passport";
    DocumentType["ResidencePermit"] = "ResidencePermit";
    DocumentType["DriversLicense"] = "DriversLicense";
    DocumentType["Face"] = "Face";
    DocumentType["Report"] = "Report";
})(DocumentType || (exports.DocumentType = DocumentType = {}));
/** Employment status. */
var EmploymentStatus;
(function (EmploymentStatus) {
    EmploymentStatus["Craftsman"] = "Craftsman";
    EmploymentStatus["Employee"] = "Employee";
    EmploymentStatus["Entrepreneur"] = "Entrepreneur";
    EmploymentStatus["Farmer"] = "Farmer";
    EmploymentStatus["Manager"] = "Manager";
    EmploymentStatus["Practitioner"] = "Practitioner";
    EmploymentStatus["Retiree"] = "Retiree";
    EmploymentStatus["ShopOwner"] = "ShopOwner";
    EmploymentStatus["Student"] = "Student";
    EmploymentStatus["Unemployed"] = "Unemployed";
})(EmploymentStatus || (exports.EmploymentStatus = EmploymentStatus = {}));
var EnvType;
(function (EnvType) {
    EnvType["Live"] = "Live";
    EnvType["Sandbox"] = "Sandbox";
})(EnvType || (exports.EnvType = EnvType = {}));
var ExternalAccountBalanceType;
(function (ExternalAccountBalanceType) {
    ExternalAccountBalanceType["ClosingBooked"] = "ClosingBooked";
    ExternalAccountBalanceType["PreviouslyClosedBooked"] = "PreviouslyClosedBooked";
    ExternalAccountBalanceType["InterimAvailable"] = "InterimAvailable";
    ExternalAccountBalanceType["Expected"] = "Expected";
    ExternalAccountBalanceType["ValueDate"] = "ValueDate";
    ExternalAccountBalanceType["Other"] = "Other";
})(ExternalAccountBalanceType || (exports.ExternalAccountBalanceType = ExternalAccountBalanceType = {}));
var ExternalAccountDataSourceType;
(function (ExternalAccountDataSourceType) {
    ExternalAccountDataSourceType["Push"] = "Push";
})(ExternalAccountDataSourceType || (exports.ExternalAccountDataSourceType = ExternalAccountDataSourceType = {}));
var ExternalAccountUsage;
(function (ExternalAccountUsage) {
    ExternalAccountUsage["Private"] = "Private";
    ExternalAccountUsage["Association"] = "Association";
    ExternalAccountUsage["Organization"] = "Organization";
    ExternalAccountUsage["Unknown"] = "Unknown";
})(ExternalAccountUsage || (exports.ExternalAccountUsage = ExternalAccountUsage = {}));
/** Fees type */
var FeesTypeEnum;
(function (FeesTypeEnum) {
    FeesTypeEnum["BankingFee"] = "BankingFee";
    FeesTypeEnum["CardPaymentsOutsideSEPA"] = "CardPaymentsOutsideSEPA";
    FeesTypeEnum["CashWithdrawalsOutsideSEPA"] = "CashWithdrawalsOutsideSEPA";
    FeesTypeEnum["CashWithdrawalsWithinSEPA"] = "CashWithdrawalsWithinSEPA";
    FeesTypeEnum["CheckDeposit"] = "CheckDeposit";
    FeesTypeEnum["CheckIncident"] = "CheckIncident";
    FeesTypeEnum["CirculationLetterDraftingFee"] = "CirculationLetterDraftingFee";
    FeesTypeEnum["ConfirmationLetterDraftingFee"] = "ConfirmationLetterDraftingFee";
    FeesTypeEnum["DirectDebitRejection"] = "DirectDebitRejection";
    FeesTypeEnum["InternationalCreditTransferInGroup1"] = "InternationalCreditTransferInGroup1";
    FeesTypeEnum["InternationalCreditTransferInGroup2"] = "InternationalCreditTransferInGroup2";
    FeesTypeEnum["InternationalCreditTransferInGroup3"] = "InternationalCreditTransferInGroup3";
    FeesTypeEnum["InternationalCreditTransferInGroup4"] = "InternationalCreditTransferInGroup4";
    FeesTypeEnum["InternationalCreditTransferOutGroup1"] = "InternationalCreditTransferOutGroup1";
    FeesTypeEnum["InternationalCreditTransferOutGroup2"] = "InternationalCreditTransferOutGroup2";
    FeesTypeEnum["InternationalCreditTransferOutGroup3"] = "InternationalCreditTransferOutGroup3";
    FeesTypeEnum["InternationalCreditTransferOutGroup4"] = "InternationalCreditTransferOutGroup4";
    FeesTypeEnum["ImproperUseOfAccount"] = "ImproperUseOfAccount";
    FeesTypeEnum["PhysicalCardDeliveryExpress"] = "PhysicalCardDeliveryExpress";
    FeesTypeEnum["PhysicalCardDeliveryFrance"] = "PhysicalCardDeliveryFrance";
    FeesTypeEnum["PhysicalCardDeliveryIntl"] = "PhysicalCardDeliveryIntl";
    FeesTypeEnum["PhysicalCardPrinting"] = "PhysicalCardPrinting";
    FeesTypeEnum["ProcessingJudicialOrAdministrativeSeizure"] = "ProcessingJudicialOrAdministrativeSeizure";
    FeesTypeEnum["SepaDirectDebitInB2bLevel1"] = "SepaDirectDebitInB2bLevel1";
    FeesTypeEnum["SepaDirectDebitInB2bLevel2"] = "SepaDirectDebitInB2bLevel2";
    FeesTypeEnum["SepaDirectDebitInCoreLevel1"] = "SepaDirectDebitInCoreLevel1";
    FeesTypeEnum["SepaDirectDebitInCoreLevel2"] = "SepaDirectDebitInCoreLevel2";
    FeesTypeEnum["SepaDirectDebitInCoreReturn"] = "SepaDirectDebitInCoreReturn";
    FeesTypeEnum["UnauthorizedOverdraft"] = "UnauthorizedOverdraft";
    FeesTypeEnum["BusinessAccountSubscription"] = "BusinessAccountSubscription";
    FeesTypeEnum["IndividualAccountSubscription"] = "IndividualAccountSubscription";
    FeesTypeEnum["AccountMembershipSubscription"] = "AccountMembershipSubscription";
    FeesTypeEnum["VirtualCardSubscription"] = "VirtualCardSubscription";
    FeesTypeEnum["SepaCreditTransferIn"] = "SepaCreditTransferIn";
    FeesTypeEnum["SepaCreditTransferOut"] = "SepaCreditTransferOut";
    FeesTypeEnum["InstantSepaCreditTransferIn"] = "InstantSepaCreditTransferIn";
    FeesTypeEnum["InstantSepaCreditTransferOut"] = "InstantSepaCreditTransferOut";
    FeesTypeEnum["SepaDirectDebitIn"] = "SepaDirectDebitIn";
    FeesTypeEnum["SepaDirectDebitOut"] = "SepaDirectDebitOut";
    FeesTypeEnum["SingleUseVirtualCard"] = "SingleUseVirtualCard";
    FeesTypeEnum["CardTransaction"] = "CardTransaction";
})(FeesTypeEnum || (exports.FeesTypeEnum = FeesTypeEnum = {}));
var FieldValidationError;
(function (FieldValidationError) {
    FieldValidationError["Missing"] = "Missing";
})(FieldValidationError || (exports.FieldValidationError = FieldValidationError = {}));
/** Field we can use when ordering that can be applied when listing funding limit settings change requests */
var FundingLimitSettingsChangeRequestOrderByFieldInput;
(function (FundingLimitSettingsChangeRequestOrderByFieldInput) {
    FundingLimitSettingsChangeRequestOrderByFieldInput["id"] = "id";
    FundingLimitSettingsChangeRequestOrderByFieldInput["createdAt"] = "createdAt";
    FundingLimitSettingsChangeRequestOrderByFieldInput["updatedAt"] = "updatedAt";
})(FundingLimitSettingsChangeRequestOrderByFieldInput || (exports.FundingLimitSettingsChangeRequestOrderByFieldInput = FundingLimitSettingsChangeRequestOrderByFieldInput = {}));
/** Funding Limit Settings Change Request Status */
var FundingLimitSettingsChangeRequestStatus;
(function (FundingLimitSettingsChangeRequestStatus) {
    FundingLimitSettingsChangeRequestStatus["WaitingForInformation"] = "WaitingForInformation";
    FundingLimitSettingsChangeRequestStatus["Pending"] = "Pending";
    FundingLimitSettingsChangeRequestStatus["Approved"] = "Approved";
    FundingLimitSettingsChangeRequestStatus["Refused"] = "Refused";
})(FundingLimitSettingsChangeRequestStatus || (exports.FundingLimitSettingsChangeRequestStatus = FundingLimitSettingsChangeRequestStatus = {}));
/** Possible values for funding limit settings status */
var FundingLimitSettingsStatus;
(function (FundingLimitSettingsStatus) {
    FundingLimitSettingsStatus["Enabled"] = "Enabled";
    FundingLimitSettingsStatus["Suspended"] = "Suspended";
    FundingLimitSettingsStatus["Disabled"] = "Disabled";
})(FundingLimitSettingsStatus || (exports.FundingLimitSettingsStatus = FundingLimitSettingsStatus = {}));
/** Field we can use when ordering that can be applied when listing funding source results */
var FundingSourceOrderByFieldInput;
(function (FundingSourceOrderByFieldInput) {
    FundingSourceOrderByFieldInput["createdAt"] = "createdAt";
    FundingSourceOrderByFieldInput["updatedAt"] = "updatedAt";
})(FundingSourceOrderByFieldInput || (exports.FundingSourceOrderByFieldInput = FundingSourceOrderByFieldInput = {}));
/** Funding Source Statuses */
var FundingSourceStatus;
(function (FundingSourceStatus) {
    FundingSourceStatus["Pending"] = "Pending";
    FundingSourceStatus["Enabled"] = "Enabled";
    FundingSourceStatus["Canceled"] = "Canceled";
    FundingSourceStatus["Rejected"] = "Rejected";
    FundingSourceStatus["Suspended"] = "Suspended";
})(FundingSourceStatus || (exports.FundingSourceStatus = FundingSourceStatus = {}));
/** Virtual IBAN Status */
var IBANStatus;
(function (IBANStatus) {
    IBANStatus["Enabled"] = "Enabled";
    IBANStatus["Canceled"] = "Canceled";
    IBANStatus["Suspended"] = "Suspended";
})(IBANStatus || (exports.IBANStatus = IBANStatus = {}));
/** The various reasons that can lead to an invalid identification level */
var IdentificationInvalidReason;
(function (IdentificationInvalidReason) {
    IdentificationInvalidReason["AbsentOrIncompleteFace"] = "AbsentOrIncompleteFace";
    IdentificationInvalidReason["AlteredDevice"] = "AlteredDevice";
    IdentificationInvalidReason["BadDocumentLighting"] = "BadDocumentLighting";
    IdentificationInvalidReason["DamagedDocument"] = "DamagedDocument";
    IdentificationInvalidReason["ExpiredDocument"] = "ExpiredDocument";
    IdentificationInvalidReason["FraudDetected"] = "FraudDetected";
    IdentificationInvalidReason["InadequateVideo"] = "InadequateVideo";
    IdentificationInvalidReason["InsufficientApplicantLighting"] = "InsufficientApplicantLighting";
    IdentificationInvalidReason["InsufficientApplicantLiveness"] = "InsufficientApplicantLiveness";
    IdentificationInvalidReason["InsufficientConnectionQuality"] = "InsufficientConnectionQuality";
    IdentificationInvalidReason["InsufficientDocumentLiveness"] = "InsufficientDocumentLiveness";
    IdentificationInvalidReason["InsufficientDocumentReadability"] = "InsufficientDocumentReadability";
    IdentificationInvalidReason["InsufficientFaceReadability"] = "InsufficientFaceReadability";
    IdentificationInvalidReason["InsufficientVideoReadability"] = "InsufficientVideoReadability";
    IdentificationInvalidReason["InternalError"] = "InternalError";
    IdentificationInvalidReason["InvalidAddress"] = "InvalidAddress";
    IdentificationInvalidReason["InvalidOrMissingData"] = "InvalidOrMissingData";
    IdentificationInvalidReason["InvoluntaryIdentification"] = "InvoluntaryIdentification";
    IdentificationInvalidReason["MissingGeolocationData"] = "MissingGeolocationData";
    IdentificationInvalidReason["NegativeNewsHit"] = "NegativeNewsHit";
    IdentificationInvalidReason["NonMatchingIdentity"] = "NonMatchingIdentity";
    IdentificationInvalidReason["NonOriginalDocument"] = "NonOriginalDocument";
    IdentificationInvalidReason["SanctionListHit"] = "SanctionListHit";
    IdentificationInvalidReason["SecondDocumentRequired"] = "SecondDocumentRequired";
    IdentificationInvalidReason["TechnicalSignatureError"] = "TechnicalSignatureError";
    IdentificationInvalidReason["TimeoutSignatureFlow"] = "TimeoutSignatureFlow";
    IdentificationInvalidReason["UnacceptableDocument"] = "UnacceptableDocument";
    IdentificationInvalidReason["UnderageApplicant"] = "UnderageApplicant";
})(IdentificationInvalidReason || (exports.IdentificationInvalidReason = IdentificationInvalidReason = {}));
/** Possible value for the field IdentificationLevel */
var IdentificationLevel;
(function (IdentificationLevel) {
    IdentificationLevel["Expert"] = "Expert";
    IdentificationLevel["QES"] = "QES";
    IdentificationLevel["PVID"] = "PVID";
})(IdentificationLevel || (exports.IdentificationLevel = IdentificationLevel = {}));
/** User identification levels input payload. */
var IdentificationLevelInput;
(function (IdentificationLevelInput) {
    IdentificationLevelInput["Expert"] = "Expert";
    IdentificationLevelInput["PVID"] = "PVID";
    IdentificationLevelInput["QES"] = "QES";
})(IdentificationLevelInput || (exports.IdentificationLevelInput = IdentificationLevelInput = {}));
/** Process of the identification */
var IdentificationProcess;
(function (IdentificationProcess) {
    IdentificationProcess["Expert"] = "Expert";
    IdentificationProcess["QES"] = "QES";
    IdentificationProcess["PVID"] = "PVID";
})(IdentificationProcess || (exports.IdentificationProcess = IdentificationProcess = {}));
/** Fields we can use when ordering that can be applied when listing identifications */
var IdentificationsOrderByField;
(function (IdentificationsOrderByField) {
    IdentificationsOrderByField["createdAt"] = "createdAt";
    IdentificationsOrderByField["updatedAt"] = "updatedAt";
})(IdentificationsOrderByField || (exports.IdentificationsOrderByField = IdentificationsOrderByField = {}));
/** Identification status */
var IdentificationStatus;
(function (IdentificationStatus) {
    IdentificationStatus["Uninitiated"] = "Uninitiated";
    IdentificationStatus["Processing"] = "Processing";
    IdentificationStatus["ReadyToSign"] = "ReadyToSign";
    IdentificationStatus["ValidIdentity"] = "ValidIdentity";
    IdentificationStatus["InsufficientDocumentQuality"] = "InsufficientDocumentQuality";
    IdentificationStatus["InvalidIdentity"] = "InvalidIdentity";
})(IdentificationStatus || (exports.IdentificationStatus = IdentificationStatus = {}));
/** The type of the identity document */
var IdentityDocumentType;
(function (IdentityDocumentType) {
    IdentityDocumentType["IdCard"] = "IdCard";
    IdentityDocumentType["Passport"] = "Passport";
    IdentityDocumentType["ResidencePermit"] = "ResidencePermit";
    IdentityDocumentType["DriversLicense"] = "DriversLicense";
})(IdentityDocumentType || (exports.IdentityDocumentType = IdentityDocumentType = {}));
/** Individual Ultimate beneficial owner nature */
var IndividualUltimateBeneficialOwnerTypeEnum;
(function (IndividualUltimateBeneficialOwnerTypeEnum) {
    IndividualUltimateBeneficialOwnerTypeEnum["LegalRepresentative"] = "LegalRepresentative";
    IndividualUltimateBeneficialOwnerTypeEnum["HasCapital"] = "HasCapital";
    IndividualUltimateBeneficialOwnerTypeEnum["Other"] = "Other";
})(IndividualUltimateBeneficialOwnerTypeEnum || (exports.IndividualUltimateBeneficialOwnerTypeEnum = IndividualUltimateBeneficialOwnerTypeEnum = {}));
var InternalDirectDebitSequence;
(function (InternalDirectDebitSequence) {
    InternalDirectDebitSequence["OneOff"] = "OneOff";
    InternalDirectDebitSequence["Recurring"] = "Recurring";
    InternalDirectDebitSequence["Recurrent"] = "Recurrent";
})(InternalDirectDebitSequence || (exports.InternalDirectDebitSequence = InternalDirectDebitSequence = {}));
var InternalPaymentMandateScheme;
(function (InternalPaymentMandateScheme) {
    InternalPaymentMandateScheme["InternalDirectDebitStandard"] = "InternalDirectDebitStandard";
    InternalPaymentMandateScheme["InternalDirectDebitB2b"] = "InternalDirectDebitB2b";
})(InternalPaymentMandateScheme || (exports.InternalPaymentMandateScheme = InternalPaymentMandateScheme = {}));
/** Internal Direct Debit Payment Mandate Sequence */
var InternalPaymentMandateSequence;
(function (InternalPaymentMandateSequence) {
    InternalPaymentMandateSequence["Recurring"] = "Recurring";
    InternalPaymentMandateSequence["Recurrent"] = "Recurrent";
    InternalPaymentMandateSequence["OneOff"] = "OneOff";
})(InternalPaymentMandateSequence || (exports.InternalPaymentMandateSequence = InternalPaymentMandateSequence = {}));
/** Received internal direct debit mandate scheme */
var InternalReceivedDirectDebitMandateScheme;
(function (InternalReceivedDirectDebitMandateScheme) {
    InternalReceivedDirectDebitMandateScheme["InternalDirectDebitB2b"] = "InternalDirectDebitB2b";
    InternalReceivedDirectDebitMandateScheme["InternalDirectDebitStandard"] = "InternalDirectDebitStandard";
})(InternalReceivedDirectDebitMandateScheme || (exports.InternalReceivedDirectDebitMandateScheme = InternalReceivedDirectDebitMandateScheme = {}));
/** Internal received direct debit mandate sequence */
var InternalReceivedDirectDebitMandateSequence;
(function (InternalReceivedDirectDebitMandateSequence) {
    InternalReceivedDirectDebitMandateSequence["OneOff"] = "OneOff";
    InternalReceivedDirectDebitMandateSequence["Recurrent"] = "Recurrent";
})(InternalReceivedDirectDebitMandateSequence || (exports.InternalReceivedDirectDebitMandateSequence = InternalReceivedDirectDebitMandateSequence = {}));
/** Language: ISO 639-1 language code */
var InternationalCreditTransferDisplayLanguage;
(function (InternationalCreditTransferDisplayLanguage) {
    InternationalCreditTransferDisplayLanguage["en"] = "en";
    InternationalCreditTransferDisplayLanguage["nl"] = "nl";
    InternationalCreditTransferDisplayLanguage["fr"] = "fr";
    InternationalCreditTransferDisplayLanguage["de"] = "de";
    InternationalCreditTransferDisplayLanguage["it"] = "it";
    InternationalCreditTransferDisplayLanguage["pt"] = "pt";
    InternationalCreditTransferDisplayLanguage["es"] = "es";
})(InternationalCreditTransferDisplayLanguage || (exports.InternationalCreditTransferDisplayLanguage = InternationalCreditTransferDisplayLanguage = {}));
/** International Credit Transfer Route */
var InternationalCreditTransferRoute;
(function (InternationalCreditTransferRoute) {
    InternationalCreditTransferRoute["Unknown"] = "Unknown";
    InternationalCreditTransferRoute["Aba"] = "Aba";
    InternationalCreditTransferRoute["Argentina"] = "Argentina";
    InternationalCreditTransferRoute["Australian"] = "Australian";
    InternationalCreditTransferRoute["AustralianBpay"] = "AustralianBpay";
    InternationalCreditTransferRoute["Brazil"] = "Brazil";
    InternationalCreditTransferRoute["Canadian"] = "Canadian";
    InternationalCreditTransferRoute["Chile"] = "Chile";
    InternationalCreditTransferRoute["CostaRica"] = "CostaRica";
    InternationalCreditTransferRoute["Czech"] = "Czech";
    InternationalCreditTransferRoute["Emirates"] = "Emirates";
    InternationalCreditTransferRoute["FedwireLocal"] = "FedwireLocal";
    InternationalCreditTransferRoute["FijiMobile"] = "FijiMobile";
    InternationalCreditTransferRoute["HongKongFps"] = "HongKongFps";
    InternationalCreditTransferRoute["Hongkong"] = "Hongkong";
    InternationalCreditTransferRoute["Hungarian"] = "Hungarian";
    InternationalCreditTransferRoute["Iban"] = "Iban";
    InternationalCreditTransferRoute["Indian"] = "Indian";
    InternationalCreditTransferRoute["IndianUpi"] = "IndianUpi";
    InternationalCreditTransferRoute["Indonesian"] = "Indonesian";
    InternationalCreditTransferRoute["Interac"] = "Interac";
    InternationalCreditTransferRoute["IsraeliLocal"] = "IsraeliLocal";
    InternationalCreditTransferRoute["Japanese"] = "Japanese";
    InternationalCreditTransferRoute["KenyaLocal"] = "KenyaLocal";
    InternationalCreditTransferRoute["KenyaMobile"] = "KenyaMobile";
    InternationalCreditTransferRoute["Malaysian"] = "Malaysian";
    InternationalCreditTransferRoute["MalaysianDuitnow"] = "MalaysianDuitnow";
    InternationalCreditTransferRoute["Mexican"] = "Mexican";
    InternationalCreditTransferRoute["Morocco"] = "Morocco";
    InternationalCreditTransferRoute["Nepal"] = "Nepal";
    InternationalCreditTransferRoute["NewZealand"] = "NewZealand";
    InternationalCreditTransferRoute["Philippines"] = "Philippines";
    InternationalCreditTransferRoute["PhilippinesMobile"] = "PhilippinesMobile";
    InternationalCreditTransferRoute["Polish"] = "Polish";
    InternationalCreditTransferRoute["PrivatBank"] = "PrivatBank";
    InternationalCreditTransferRoute["Singapore"] = "Singapore";
    InternationalCreditTransferRoute["SingaporePaynow"] = "SingaporePaynow";
    InternationalCreditTransferRoute["SortCode"] = "SortCode";
    InternationalCreditTransferRoute["SouthAfrica"] = "SouthAfrica";
    InternationalCreditTransferRoute["SouthKoreanPaygate"] = "SouthKoreanPaygate";
    InternationalCreditTransferRoute["SouthKoreanPaygateBusiness"] = "SouthKoreanPaygateBusiness";
    InternationalCreditTransferRoute["SwiftCode"] = "SwiftCode";
    InternationalCreditTransferRoute["Thailand"] = "Thailand";
    InternationalCreditTransferRoute["TurkishEarthport"] = "TurkishEarthport";
    InternationalCreditTransferRoute["Uruguay"] = "Uruguay";
    InternationalCreditTransferRoute["VietnameEarthport"] = "VietnameEarthport";
})(InternationalCreditTransferRoute || (exports.InternationalCreditTransferRoute = InternationalCreditTransferRoute = {}));
/** International Credit Transfer Route */
var InternationalCreditTransferRouteInput;
(function (InternationalCreditTransferRouteInput) {
    InternationalCreditTransferRouteInput["Aba"] = "Aba";
    InternationalCreditTransferRouteInput["Argentina"] = "Argentina";
    InternationalCreditTransferRouteInput["Australian"] = "Australian";
    InternationalCreditTransferRouteInput["AustralianBpay"] = "AustralianBpay";
    InternationalCreditTransferRouteInput["Brazil"] = "Brazil";
    InternationalCreditTransferRouteInput["Canadian"] = "Canadian";
    InternationalCreditTransferRouteInput["Chile"] = "Chile";
    InternationalCreditTransferRouteInput["CostaRica"] = "CostaRica";
    InternationalCreditTransferRouteInput["Czech"] = "Czech";
    InternationalCreditTransferRouteInput["Emirates"] = "Emirates";
    InternationalCreditTransferRouteInput["FedwireLocal"] = "FedwireLocal";
    InternationalCreditTransferRouteInput["FijiMobile"] = "FijiMobile";
    InternationalCreditTransferRouteInput["HongKongFps"] = "HongKongFps";
    InternationalCreditTransferRouteInput["Hongkong"] = "Hongkong";
    InternationalCreditTransferRouteInput["Hungarian"] = "Hungarian";
    InternationalCreditTransferRouteInput["Iban"] = "Iban";
    InternationalCreditTransferRouteInput["Indian"] = "Indian";
    InternationalCreditTransferRouteInput["IndianUpi"] = "IndianUpi";
    InternationalCreditTransferRouteInput["Interac"] = "Interac";
    InternationalCreditTransferRouteInput["IsraeliLocal"] = "IsraeliLocal";
    InternationalCreditTransferRouteInput["Japanese"] = "Japanese";
    InternationalCreditTransferRouteInput["KenyaLocal"] = "KenyaLocal";
    InternationalCreditTransferRouteInput["KenyaMobile"] = "KenyaMobile";
    InternationalCreditTransferRouteInput["Malaysian"] = "Malaysian";
    InternationalCreditTransferRouteInput["MalaysianDuitnow"] = "MalaysianDuitnow";
    InternationalCreditTransferRouteInput["Mexican"] = "Mexican";
    InternationalCreditTransferRouteInput["Morocco"] = "Morocco";
    InternationalCreditTransferRouteInput["Nepal"] = "Nepal";
    InternationalCreditTransferRouteInput["NewZealand"] = "NewZealand";
    InternationalCreditTransferRouteInput["Philippines"] = "Philippines";
    InternationalCreditTransferRouteInput["PhilippinesMobile"] = "PhilippinesMobile";
    InternationalCreditTransferRouteInput["Polish"] = "Polish";
    InternationalCreditTransferRouteInput["PrivatBank"] = "PrivatBank";
    InternationalCreditTransferRouteInput["Singapore"] = "Singapore";
    InternationalCreditTransferRouteInput["SingaporePaynow"] = "SingaporePaynow";
    InternationalCreditTransferRouteInput["SortCode"] = "SortCode";
    InternationalCreditTransferRouteInput["SouthKoreanPaygate"] = "SouthKoreanPaygate";
    InternationalCreditTransferRouteInput["SouthKoreanPaygateBusiness"] = "SouthKoreanPaygateBusiness";
    InternationalCreditTransferRouteInput["SouthAfrica"] = "SouthAfrica";
    InternationalCreditTransferRouteInput["SwiftCode"] = "SwiftCode";
    InternationalCreditTransferRouteInput["Thailand"] = "Thailand";
    InternationalCreditTransferRouteInput["TurkishEarthport"] = "TurkishEarthport";
})(InternationalCreditTransferRouteInput || (exports.InternationalCreditTransferRouteInput = InternationalCreditTransferRouteInput = {}));
var InvalidArgumentRejectionCode;
(function (InvalidArgumentRejectionCode) {
    InvalidArgumentRejectionCode["INVALID_INPUT"] = "INVALID_INPUT";
})(InvalidArgumentRejectionCode || (exports.InvalidArgumentRejectionCode = InvalidArgumentRejectionCode = {}));
/** InvalidIbanCode */
var InvalidIbanCode;
(function (InvalidIbanCode) {
    InvalidIbanCode["InvalidLength"] = "InvalidLength";
    InvalidIbanCode["InvalidStructure"] = "InvalidStructure";
    InvalidIbanCode["InvalidChecksum"] = "InvalidChecksum";
    InvalidIbanCode["InvalidBank"] = "InvalidBank";
})(InvalidIbanCode || (exports.InvalidIbanCode = InvalidIbanCode = {}));
/** The different statuses of invoice */
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["Failed"] = "Failed";
    InvoiceStatus["NotPaid"] = "NotPaid";
    InvoiceStatus["Paid"] = "Paid";
    InvoiceStatus["PaymentDue"] = "PaymentDue";
    InvoiceStatus["Pending"] = "Pending";
    InvoiceStatus["Voided"] = "Voided";
})(InvoiceStatus || (exports.InvoiceStatus = InvoiceStatus = {}));
var InvoiceType;
(function (InvoiceType) {
    InvoiceType["Invoice"] = "Invoice";
    InvoiceType["RefundNote"] = "RefundNote";
})(InvoiceType || (exports.InvoiceType = InvoiceType = {}));
var Language;
(function (Language) {
    Language["de"] = "de";
    Language["en"] = "en";
    Language["fr"] = "fr";
    Language["it"] = "it";
    Language["nl"] = "nl";
    Language["es"] = "es";
})(Language || (exports.Language = Language = {}));
var LegalDocumentStatus;
(function (LegalDocumentStatus) {
    LegalDocumentStatus["Upcoming"] = "Upcoming";
    LegalDocumentStatus["Active"] = "Active";
    LegalDocumentStatus["Inactive"] = "Inactive";
})(LegalDocumentStatus || (exports.LegalDocumentStatus = LegalDocumentStatus = {}));
var LegalDocumentType;
(function (LegalDocumentType) {
    LegalDocumentType["SwanTCU"] = "SwanTCU";
})(LegalDocumentType || (exports.LegalDocumentType = LegalDocumentType = {}));
/** Language: ISO 639-1 language code */
var MandateLanguage;
(function (MandateLanguage) {
    MandateLanguage["de"] = "de";
    MandateLanguage["en"] = "en";
    MandateLanguage["fr"] = "fr";
    MandateLanguage["it"] = "it";
    MandateLanguage["nl"] = "nl";
    MandateLanguage["es"] = "es";
    MandateLanguage["pt"] = "pt";
    MandateLanguage["fi"] = "fi";
})(MandateLanguage || (exports.MandateLanguage = MandateLanguage = {}));
/** MerchantCategoryDescription */
var MerchantCategoryDescription;
(function (MerchantCategoryDescription) {
    MerchantCategoryDescription["AccessoryAndApparelStoresMiscellaneous"] = "AccessoryAndApparelStoresMiscellaneous";
    MerchantCategoryDescription["AccountingAuditingAndBookkeepingServices"] = "AccountingAuditingAndBookkeepingServices";
    MerchantCategoryDescription["AdvertisingServices"] = "AdvertisingServices";
    MerchantCategoryDescription["AgriculturalCooperatives"] = "AgriculturalCooperatives";
    MerchantCategoryDescription["AirCarriersAirlinesNotElsewhereClassified"] = "AirCarriersAirlinesNotElsewhereClassified";
    MerchantCategoryDescription["AirConditioningAndRefrigerationRepairShops"] = "AirConditioningAndRefrigerationRepairShops";
    MerchantCategoryDescription["AirConditioningHeatingAndPlumbingContractors"] = "AirConditioningHeatingAndPlumbingContractors";
    MerchantCategoryDescription["AirlinesAirCarriers"] = "AirlinesAirCarriers";
    MerchantCategoryDescription["AirportsAirportTerminalsFlyingFields"] = "AirportsAirportTerminalsFlyingFields";
    MerchantCategoryDescription["AlterationsMendingSeamstressesTailors"] = "AlterationsMendingSeamstressesTailors";
    MerchantCategoryDescription["AmbulanceServices"] = "AmbulanceServices";
    MerchantCategoryDescription["AmusementParksCarnivalsCircusesFortuneTellers"] = "AmusementParksCarnivalsCircusesFortuneTellers";
    MerchantCategoryDescription["AntiqueReproductionStores"] = "AntiqueReproductionStores";
    MerchantCategoryDescription["AntiqueShopsSalesRepairsAndRestorationServices"] = "AntiqueShopsSalesRepairsAndRestorationServices";
    MerchantCategoryDescription["ApplianceRepairShopsElectricalAndSmall"] = "ApplianceRepairShopsElectricalAndSmall";
    MerchantCategoryDescription["AquariumsDolphinariumsZoosAndSeaquariums"] = "AquariumsDolphinariumsZoosAndSeaquariums";
    MerchantCategoryDescription["ArchitecturalEngineeringAndSurveyingServices"] = "ArchitecturalEngineeringAndSurveyingServices";
    MerchantCategoryDescription["ArtDealersAndGalleries"] = "ArtDealersAndGalleries";
    MerchantCategoryDescription["ArtistSupplyStoresCraftShops"] = "ArtistSupplyStoresCraftShops";
    MerchantCategoryDescription["AssociationsCivicSocialAndFraternal"] = "AssociationsCivicSocialAndFraternal";
    MerchantCategoryDescription["AthleticFieldsCommercialSportsProfessionalSportsClubsSportsPromoters"] = "AthleticFieldsCommercialSportsProfessionalSportsClubsSportsPromoters";
    MerchantCategoryDescription["AttorneysLegalServices"] = "AttorneysLegalServices";
    MerchantCategoryDescription["AutomatedCashDisbursementsCustomerFinancialInstitution"] = "AutomatedCashDisbursementsCustomerFinancialInstitution";
    MerchantCategoryDescription["AutomobileAndTruckDealersSalesServiceRepairsPartsAndLeasing"] = "AutomobileAndTruckDealersSalesServiceRepairsPartsAndLeasing";
    MerchantCategoryDescription["AutomobileAndTruckDealersUsedOnlySales"] = "AutomobileAndTruckDealersUsedOnlySales";
    MerchantCategoryDescription["AutomobileAssociations"] = "AutomobileAssociations";
    MerchantCategoryDescription["AutomobileParkingLotsAndGarages"] = "AutomobileParkingLotsAndGarages";
    MerchantCategoryDescription["AutomobileRentalAgencyNotElsewhereClassified"] = "AutomobileRentalAgencyNotElsewhereClassified";
    MerchantCategoryDescription["AutomotiveBodyRepairShops"] = "AutomotiveBodyRepairShops";
    MerchantCategoryDescription["AutomotivePaintShops"] = "AutomotivePaintShops";
    MerchantCategoryDescription["AutomotivePartsAccessoriesStores"] = "AutomotivePartsAccessoriesStores";
    MerchantCategoryDescription["AutomotiveServiceShops"] = "AutomotiveServiceShops";
    MerchantCategoryDescription["AutomotiveTireStores"] = "AutomotiveTireStores";
    MerchantCategoryDescription["AutoStoreHomeSupplyStores"] = "AutoStoreHomeSupplyStores";
    MerchantCategoryDescription["BailAndBondPayments"] = "BailAndBondPayments";
    MerchantCategoryDescription["Bakeries"] = "Bakeries";
    MerchantCategoryDescription["BandsOrchestrasAndMiscellaneousEntertainersNotElsewhereClassified"] = "BandsOrchestrasAndMiscellaneousEntertainersNotElsewhereClassified";
    MerchantCategoryDescription["BarberAndBeautyShops"] = "BarberAndBeautyShops";
    MerchantCategoryDescription["BarsCocktailLoungesDiscothequesNightclubsAndTavernsDrinkingPlacesAlcoholicBeverages"] = "BarsCocktailLoungesDiscothequesNightclubsAndTavernsDrinkingPlacesAlcoholicBeverages";
    MerchantCategoryDescription["BicycleShopsSalesAndService"] = "BicycleShopsSalesAndService";
    MerchantCategoryDescription["BoatDealers"] = "BoatDealers";
    MerchantCategoryDescription["BoatLeasesAndBoatRentals"] = "BoatLeasesAndBoatRentals";
    MerchantCategoryDescription["BooksPeriodicalsAndNewspapers"] = "BooksPeriodicalsAndNewspapers";
    MerchantCategoryDescription["BookStores"] = "BookStores";
    MerchantCategoryDescription["BowlingAlleys"] = "BowlingAlleys";
    MerchantCategoryDescription["BridgeAndRoadFeesTolls"] = "BridgeAndRoadFeesTolls";
    MerchantCategoryDescription["BuildingMaterialsLumberStores"] = "BuildingMaterialsLumberStores";
    MerchantCategoryDescription["BusinessServicesNotElsewhereClassified"] = "BusinessServicesNotElsewhereClassified";
    MerchantCategoryDescription["BusLines"] = "BusLines";
    MerchantCategoryDescription["BuyingOrShoppingClubsServices"] = "BuyingOrShoppingClubsServices";
    MerchantCategoryDescription["CableSatelliteAndOtherPayTelevisionAndRadioServices"] = "CableSatelliteAndOtherPayTelevisionAndRadioServices";
    MerchantCategoryDescription["CameraAndPhotographicSupplyStores"] = "CameraAndPhotographicSupplyStores";
    MerchantCategoryDescription["CamperDealersRecreationalAndUtilityTrailers"] = "CamperDealersRecreationalAndUtilityTrailers";
    MerchantCategoryDescription["CampgroundsAndTrailerParks"] = "CampgroundsAndTrailerParks";
    MerchantCategoryDescription["CandyNutConfectioneryStores"] = "CandyNutConfectioneryStores";
    MerchantCategoryDescription["CardGiftNoveltyAndSouvenirShops"] = "CardGiftNoveltyAndSouvenirShops";
    MerchantCategoryDescription["CarpentryContractors"] = "CarpentryContractors";
    MerchantCategoryDescription["CarpetAndUpholsteryCleaning"] = "CarpetAndUpholsteryCleaning";
    MerchantCategoryDescription["CarRentalAgencies"] = "CarRentalAgencies";
    MerchantCategoryDescription["CarWashes"] = "CarWashes";
    MerchantCategoryDescription["Caterers"] = "Caterers";
    MerchantCategoryDescription["ChemicalsAndAlliedProductsNotElsewhereClassified"] = "ChemicalsAndAlliedProductsNotElsewhereClassified";
    MerchantCategoryDescription["ChildCareServices"] = "ChildCareServices";
    MerchantCategoryDescription["ChildrenAndInfantsWearStores"] = "ChildrenAndInfantsWearStores";
    MerchantCategoryDescription["ChiropodistsPodiatrists"] = "ChiropodistsPodiatrists";
    MerchantCategoryDescription["Chiropractors"] = "Chiropractors";
    MerchantCategoryDescription["CigarStoresAndStands"] = "CigarStoresAndStands";
    MerchantCategoryDescription["CleaningAndMaintenanceJanitorialServices"] = "CleaningAndMaintenanceJanitorialServices";
    MerchantCategoryDescription["CleaningGarmentAndLaundryServices"] = "CleaningGarmentAndLaundryServices";
    MerchantCategoryDescription["ClockJewelryAndWatchRepairShops"] = "ClockJewelryAndWatchRepairShops";
    MerchantCategoryDescription["ClockJewelryWatchAndSilverwareStore"] = "ClockJewelryWatchAndSilverwareStore";
    MerchantCategoryDescription["ClothingRentalCostumesUniformsAndFormalWear"] = "ClothingRentalCostumesUniformsAndFormalWear";
    MerchantCategoryDescription["ClubsCountryClubsMembershipAthleticRecreationSportsPrivateGolfCourses"] = "ClubsCountryClubsMembershipAthleticRecreationSportsPrivateGolfCourses";
    MerchantCategoryDescription["CollegesUniversitiesProfessionalSchoolsAndJuniorColleges"] = "CollegesUniversitiesProfessionalSchoolsAndJuniorColleges";
    MerchantCategoryDescription["CommercialArtGraphicsPhotography"] = "CommercialArtGraphicsPhotography";
    MerchantCategoryDescription["CommercialEquipmentNotElsewhereClassified"] = "CommercialEquipmentNotElsewhereClassified";
    MerchantCategoryDescription["CommercialFootwear"] = "CommercialFootwear";
    MerchantCategoryDescription["ComputerMaintenanceRepairAndServicesNotElsewhereClassified"] = "ComputerMaintenanceRepairAndServicesNotElsewhereClassified";
    MerchantCategoryDescription["ComputerNetworkOrInformationServices"] = "ComputerNetworkOrInformationServices";
    MerchantCategoryDescription["ComputerProgrammingDataProcessingAndIntegratedSystemsDesignServices"] = "ComputerProgrammingDataProcessingAndIntegratedSystemsDesignServices";
    MerchantCategoryDescription["ComputersComputerPeripheralEquipmentSoftware"] = "ComputersComputerPeripheralEquipmentSoftware";
    MerchantCategoryDescription["ComputerSoftwareStores"] = "ComputerSoftwareStores";
    MerchantCategoryDescription["ConcreteWorkContractors"] = "ConcreteWorkContractors";
    MerchantCategoryDescription["ConstructionMaterialsNotElsewhereClassified"] = "ConstructionMaterialsNotElsewhereClassified";
    MerchantCategoryDescription["ConsultingManagementAndPublicRelationsServices"] = "ConsultingManagementAndPublicRelationsServices";
    MerchantCategoryDescription["ConsumerCreditReportingAgencies"] = "ConsumerCreditReportingAgencies";
    MerchantCategoryDescription["ContractorsSpecialTradeNotElsewhereClassified"] = "ContractorsSpecialTradeNotElsewhereClassified";
    MerchantCategoryDescription["CosmeticStores"] = "CosmeticStores";
    MerchantCategoryDescription["CourierServiceAirAndGroundFreightForwarders"] = "CourierServiceAirAndGroundFreightForwarders";
    MerchantCategoryDescription["CourtCostsIncludingAlimonyAndChildSupport"] = "CourtCostsIncludingAlimonyAndChildSupport";
    MerchantCategoryDescription["CruiseLines"] = "CruiseLines";
    MerchantCategoryDescription["CrystalAndGlasswareStores"] = "CrystalAndGlasswareStores";
    MerchantCategoryDescription["DairyProductsStores"] = "DairyProductsStores";
    MerchantCategoryDescription["DanceHallsSchoolsAndStudios"] = "DanceHallsSchoolsAndStudios";
    MerchantCategoryDescription["DatingServices"] = "DatingServices";
    MerchantCategoryDescription["DebtMarriagePersonalCounselingService"] = "DebtMarriagePersonalCounselingService";
    MerchantCategoryDescription["DentalAndMedicalLaboratories"] = "DentalAndMedicalLaboratories";
    MerchantCategoryDescription["DentalLaboratoryMedicalOphthalmicHospitalEquipmentAndSupplies"] = "DentalLaboratoryMedicalOphthalmicHospitalEquipmentAndSupplies";
    MerchantCategoryDescription["DentistsOrthodontists"] = "DentistsOrthodontists";
    MerchantCategoryDescription["DepartmentStores"] = "DepartmentStores";
    MerchantCategoryDescription["DetectiveAgenciesProtectiveAgenciesSecurityServicesIncludingArmoredCarsGuardDogs"] = "DetectiveAgenciesProtectiveAgenciesSecurityServicesIncludingArmoredCarsGuardDogs";
    MerchantCategoryDescription["DigitalGoodsAudiovisualMediaIncludingBooksMoviesAndMusic"] = "DigitalGoodsAudiovisualMediaIncludingBooksMoviesAndMusic";
    MerchantCategoryDescription["DigitalGoodsGames"] = "DigitalGoodsGames";
    MerchantCategoryDescription["DigitalGoodsMultiCategory"] = "DigitalGoodsMultiCategory";
    MerchantCategoryDescription["DigitalGoodsSoftwareApplicationsExcludingGames"] = "DigitalGoodsSoftwareApplicationsExcludingGames";
    MerchantCategoryDescription["DirectMarketingCatalogMerchants"] = "DirectMarketingCatalogMerchants";
    MerchantCategoryDescription["DirectMarketingCombinationCatalogAndRetailMerchants"] = "DirectMarketingCombinationCatalogAndRetailMerchants";
    MerchantCategoryDescription["DirectMarketingContinuitySubscriptionMerchants"] = "DirectMarketingContinuitySubscriptionMerchants";
    MerchantCategoryDescription["DirectMarketingInboundTelemarketingMerchants"] = "DirectMarketingInboundTelemarketingMerchants";
    MerchantCategoryDescription["DirectMarketingInsuranceServices"] = "DirectMarketingInsuranceServices";
    MerchantCategoryDescription["DirectMarketingOtherDirectMarketersNotElsewhereClassified"] = "DirectMarketingOtherDirectMarketersNotElsewhereClassified";
    MerchantCategoryDescription["DirectMarketingOutboundTelemarketingMerchants"] = "DirectMarketingOutboundTelemarketingMerchants";
    MerchantCategoryDescription["DirectMarketingTravelRelatedArrangementServices"] = "DirectMarketingTravelRelatedArrangementServices";
    MerchantCategoryDescription["DiscountStores"] = "DiscountStores";
    MerchantCategoryDescription["DoctorsNotElsewhereClassified"] = "DoctorsNotElsewhereClassified";
    MerchantCategoryDescription["DoorToDoorSales"] = "DoorToDoorSales";
    MerchantCategoryDescription["DraperyUpholsteryAndWindowCoveringsStores"] = "DraperyUpholsteryAndWindowCoveringsStores";
    MerchantCategoryDescription["DrugsDrugProprietorsAndDruggistsSundries"] = "DrugsDrugProprietorsAndDruggistsSundries";
    MerchantCategoryDescription["DrugStoresPharmacies"] = "DrugStoresPharmacies";
    MerchantCategoryDescription["DryCleaners"] = "DryCleaners";
    MerchantCategoryDescription["DurableGoodsNotElsewhereClassified"] = "DurableGoodsNotElsewhereClassified";
    MerchantCategoryDescription["DutyFreeStores"] = "DutyFreeStores";
    MerchantCategoryDescription["EatingPlacesRestaurants"] = "EatingPlacesRestaurants";
    MerchantCategoryDescription["ElectricalContractors"] = "ElectricalContractors";
    MerchantCategoryDescription["ElectricalPartsAndEquipment"] = "ElectricalPartsAndEquipment";
    MerchantCategoryDescription["ElectricRazorStoresSalesAndService"] = "ElectricRazorStoresSalesAndService";
    MerchantCategoryDescription["ElectricVehicleCharging"] = "ElectricVehicleCharging";
    MerchantCategoryDescription["ElectronicRepairShops"] = "ElectronicRepairShops";
    MerchantCategoryDescription["ElectronicSales"] = "ElectronicSales";
    MerchantCategoryDescription["EmploymentAgenciesTemporaryHelpServices"] = "EmploymentAgenciesTemporaryHelpServices";
    MerchantCategoryDescription["EquipmentFurnitureAndHomeFurnishingsStoresExceptAppliances"] = "EquipmentFurnitureAndHomeFurnishingsStoresExceptAppliances";
    MerchantCategoryDescription["EquipmentRentalAndLeasingServicesFurnitureRentalToolRental"] = "EquipmentRentalAndLeasingServicesFurnitureRentalToolRental";
    MerchantCategoryDescription["ExterminatingAndDisinfectingServices"] = "ExterminatingAndDisinfectingServices";
    MerchantCategoryDescription["FabricNeedleworkPieceGoodsAndSewingStores"] = "FabricNeedleworkPieceGoodsAndSewingStores";
    MerchantCategoryDescription["FamilyClothingStores"] = "FamilyClothingStores";
    MerchantCategoryDescription["FastFoodRestaurants"] = "FastFoodRestaurants";
    MerchantCategoryDescription["Fines"] = "Fines";
    MerchantCategoryDescription["FireplaceFireplaceScreensAndAccessoriesStores"] = "FireplaceFireplaceScreensAndAccessoriesStores";
    MerchantCategoryDescription["FloorCoveringStores"] = "FloorCoveringStores";
    MerchantCategoryDescription["Florists"] = "Florists";
    MerchantCategoryDescription["FloristsSuppliesNurseryStockAndFlowers"] = "FloristsSuppliesNurseryStockAndFlowers";
    MerchantCategoryDescription["FreezerLockerMeatProvisioners"] = "FreezerLockerMeatProvisioners";
    MerchantCategoryDescription["FuelDealersCoalFuelOilLiquefiedPetroleumWood"] = "FuelDealersCoalFuelOilLiquefiedPetroleumWood";
    MerchantCategoryDescription["FuelDispenserAutomated"] = "FuelDispenserAutomated";
    MerchantCategoryDescription["FuneralServiceAndCrematories"] = "FuneralServiceAndCrematories";
    MerchantCategoryDescription["FurnitureReupholsteryAndRepairRefinishing"] = "FurnitureReupholsteryAndRepairRefinishing";
    MerchantCategoryDescription["FurriersAndFurShops"] = "FurriersAndFurShops";
    MerchantCategoryDescription["GamblingTransactions"] = "GamblingTransactions";
    MerchantCategoryDescription["GameToyAndHobbyShops"] = "GameToyAndHobbyShops";
    MerchantCategoryDescription["GeneralContractorsResidentialAndCommercial"] = "GeneralContractorsResidentialAndCommercial";
    MerchantCategoryDescription["GlassPaintWallpaperStores"] = "GlassPaintWallpaperStores";
    MerchantCategoryDescription["GolfCoursesPublic"] = "GolfCoursesPublic";
    MerchantCategoryDescription["GovernmentLicensedHorseOrDogRacingUSRegionOnly"] = "GovernmentLicensedHorseOrDogRacingUSRegionOnly";
    MerchantCategoryDescription["GovernmentOwnedLotterySpecificCountries"] = "GovernmentOwnedLotterySpecificCountries";
    MerchantCategoryDescription["GovernmentOwnedLotteryUSRegionOnly"] = "GovernmentOwnedLotteryUSRegionOnly";
    MerchantCategoryDescription["GovernmentServicesNotElsewhereClassified"] = "GovernmentServicesNotElsewhereClassified";
    MerchantCategoryDescription["GroceryStoresSupermarkets"] = "GroceryStoresSupermarkets";
    MerchantCategoryDescription["HardwareEquipmentAndSupplies"] = "HardwareEquipmentAndSupplies";
    MerchantCategoryDescription["HardwareStores"] = "HardwareStores";
    MerchantCategoryDescription["HatCleaningShopsShoeRepairShopsShoeShineParlors"] = "HatCleaningShopsShoeRepairShopsShoeShineParlors";
    MerchantCategoryDescription["HealthAndBeautySpas"] = "HealthAndBeautySpas";
    MerchantCategoryDescription["HealthPractitionersMedicalServicesNotElsewhereClassified"] = "HealthPractitionersMedicalServicesNotElsewhereClassified";
    MerchantCategoryDescription["HearingAidsSalesServiceSupplyStores"] = "HearingAidsSalesServiceSupplyStores";
    MerchantCategoryDescription["HomeSupplyWarehouseStores"] = "HomeSupplyWarehouseStores";
    MerchantCategoryDescription["HorticulturalAndLandscapingServices"] = "HorticulturalAndLandscapingServices";
    MerchantCategoryDescription["Hospitals"] = "Hospitals";
    MerchantCategoryDescription["HouseholdApplianceStores"] = "HouseholdApplianceStores";
    MerchantCategoryDescription["IndustrialSuppliesNotElsewhereClassified"] = "IndustrialSuppliesNotElsewhereClassified";
    MerchantCategoryDescription["InformationRetrievalServices"] = "InformationRetrievalServices";
    MerchantCategoryDescription["InsulationMasonryPlasteringStoneworkAndTileSettingContractors"] = "InsulationMasonryPlasteringStoneworkAndTileSettingContractors";
    MerchantCategoryDescription["InsuranceSalesUnderwritingAndPremiums"] = "InsuranceSalesUnderwritingAndPremiums";
    MerchantCategoryDescription["InternetGamblingUSRegionOnly"] = "InternetGamblingUSRegionOnly";
    MerchantCategoryDescription["IntraGovernmentPurchasesGovernmentOnly"] = "IntraGovernmentPurchasesGovernmentOnly";
    MerchantCategoryDescription["KeyEntryTelecomMerchantProvidingSingleLocalAndLongDistancePhoneCallsUsingACentralAccessNumberInANonFaceToFaceEnvironmentUsingKeyEntry"] = "KeyEntryTelecomMerchantProvidingSingleLocalAndLongDistancePhoneCallsUsingACentralAccessNumberInANonFaceToFaceEnvironmentUsingKeyEntry";
    MerchantCategoryDescription["LaundryServicesFamilyAndCommercial"] = "LaundryServicesFamilyAndCommercial";
    MerchantCategoryDescription["LawnAndGardenSupplyStores"] = "LawnAndGardenSupplyStores";
    MerchantCategoryDescription["LeatherGoodsAndLuggageStores"] = "LeatherGoodsAndLuggageStores";
    MerchantCategoryDescription["LimousinesAndTaxicabs"] = "LimousinesAndTaxicabs";
    MerchantCategoryDescription["LodgingHotelsMotelsResorts"] = "LodgingHotelsMotelsResorts";
    MerchantCategoryDescription["LodgingHotelsMotelsResortsNotElsewhereClassified"] = "LodgingHotelsMotelsResortsNotElsewhereClassified";
    MerchantCategoryDescription["ManualCashDisbursementsCustomerFinancialInstitution"] = "ManualCashDisbursementsCustomerFinancialInstitution";
    MerchantCategoryDescription["MarinasMarineServiceSupplies"] = "MarinasMarineServiceSupplies";
    MerchantCategoryDescription["MassageParlors"] = "MassageParlors";
    MerchantCategoryDescription["MenAndBoysClothingAndAccessoriesStores"] = "MenAndBoysClothingAndAccessoriesStores";
    MerchantCategoryDescription["MenAndWomenClothingStores"] = "MenAndWomenClothingStores";
    MerchantCategoryDescription["MenWomenAndChildrenUniformsAndCommercialClothing"] = "MenWomenAndChildrenUniformsAndCommercialClothing";
    MerchantCategoryDescription["MerchandiseAndServicesCustomerFinancialInstitution"] = "MerchandiseAndServicesCustomerFinancialInstitution";
    MerchantCategoryDescription["MetalServiceCentersAndOffices"] = "MetalServiceCentersAndOffices";
    MerchantCategoryDescription["MiscellaneousAndSpecialtyRetailStores"] = "MiscellaneousAndSpecialtyRetailStores";
    MerchantCategoryDescription["MiscellaneousAutomotiveAircraftAndFarmEquipmentDealersNotElsewhereClassified"] = "MiscellaneousAutomotiveAircraftAndFarmEquipmentDealersNotElsewhereClassified";
    MerchantCategoryDescription["MiscellaneousFoodStoresConvenienceStoresMarketsSpecialtyStores"] = "MiscellaneousFoodStoresConvenienceStoresMarketsSpecialtyStores";
    MerchantCategoryDescription["MiscellaneousGeneralMerchandiseStores"] = "MiscellaneousGeneralMerchandiseStores";
    MerchantCategoryDescription["MiscellaneousHouseFurnishingSpecialtyShops"] = "MiscellaneousHouseFurnishingSpecialtyShops";
    MerchantCategoryDescription["MiscellaneousPublishingAndPrinting"] = "MiscellaneousPublishingAndPrinting";
    MerchantCategoryDescription["MiscellaneousRepairShopsAndRelatedServices"] = "MiscellaneousRepairShopsAndRelatedServices";
    MerchantCategoryDescription["MobileHomeDealers"] = "MobileHomeDealers";
    MerchantCategoryDescription["MoneySendFunding"] = "MoneySendFunding";
    MerchantCategoryDescription["MoneySendInterCountry"] = "MoneySendInterCountry";
    MerchantCategoryDescription["MoneySendIntraCountry"] = "MoneySendIntraCountry";
    MerchantCategoryDescription["MoneyTransfer"] = "MoneyTransfer";
    MerchantCategoryDescription["MotionPictureAndVideoTapeProductionAndDistribution"] = "MotionPictureAndVideoTapeProductionAndDistribution";
    MerchantCategoryDescription["MotionPictureTheaters"] = "MotionPictureTheaters";
    MerchantCategoryDescription["MotorcycleShopsAndDealers"] = "MotorcycleShopsAndDealers";
    MerchantCategoryDescription["MotorFreightCarriersTruckingLocalLongDistanceMovingAndStorageCompaniesLocalDelivery"] = "MotorFreightCarriersTruckingLocalLongDistanceMovingAndStorageCompaniesLocalDelivery";
    MerchantCategoryDescription["MotorHomeAndRecreationalVehicleRental"] = "MotorHomeAndRecreationalVehicleRental";
    MerchantCategoryDescription["MotorHomeDealers"] = "MotorHomeDealers";
    MerchantCategoryDescription["MotorVehicleSuppliesAndNewParts"] = "MotorVehicleSuppliesAndNewParts";
    MerchantCategoryDescription["MusicStoresMusicalInstrumentsPianosSheetMusic"] = "MusicStoresMusicalInstrumentsPianosSheetMusic";
    MerchantCategoryDescription["NewsDealersAndNewsstands"] = "NewsDealersAndNewsstands";
    MerchantCategoryDescription["NondurableGoodsNotElsewhereClassified"] = "NondurableGoodsNotElsewhereClassified";
    MerchantCategoryDescription["NursingAndPersonalCareFacilities"] = "NursingAndPersonalCareFacilities";
    MerchantCategoryDescription["OfficeAndCommercialFurniture"] = "OfficeAndCommercialFurniture";
    MerchantCategoryDescription["OfficePhotographicPhotocopyAndMicrofilmEquipment"] = "OfficePhotographicPhotocopyAndMicrofilmEquipment";
    MerchantCategoryDescription["OfficeSchoolSupplyAndStationeryStores"] = "OfficeSchoolSupplyAndStationeryStores";
    MerchantCategoryDescription["OpticiansOpticalGoodsAndEyeglasses"] = "OpticiansOpticalGoodsAndEyeglasses";
    MerchantCategoryDescription["OptometristsOphthalmologists"] = "OptometristsOphthalmologists";
    MerchantCategoryDescription["OrganizationsCharitableAndSocialService"] = "OrganizationsCharitableAndSocialService";
    MerchantCategoryDescription["OrganizationsMembershipNotElsewhereClassified"] = "OrganizationsMembershipNotElsewhereClassified";
    MerchantCategoryDescription["OrganizationsPolitical"] = "OrganizationsPolitical";
    MerchantCategoryDescription["OrganizationsReligious"] = "OrganizationsReligious";
    MerchantCategoryDescription["OrthopedicGoodsArtificialLimbStores"] = "OrthopedicGoodsArtificialLimbStores";
    MerchantCategoryDescription["OsteopathicPhysicians"] = "OsteopathicPhysicians";
    MerchantCategoryDescription["OtherServicesNotElsewhereClassified"] = "OtherServicesNotElsewhereClassified";
    MerchantCategoryDescription["PackageStoresBeerWineAndLiquor"] = "PackageStoresBeerWineAndLiquor";
    MerchantCategoryDescription["PaintsVarnishesAndSupplies"] = "PaintsVarnishesAndSupplies";
    MerchantCategoryDescription["PassengerRailways"] = "PassengerRailways";
    MerchantCategoryDescription["PawnShops"] = "PawnShops";
    MerchantCategoryDescription["PaymentTransactionCustomerFinancialInstitution"] = "PaymentTransactionCustomerFinancialInstitution";
    MerchantCategoryDescription["PaymentTransactionMerchant"] = "PaymentTransactionMerchant";
    MerchantCategoryDescription["PetroleumAndPetroleumProducts"] = "PetroleumAndPetroleumProducts";
    MerchantCategoryDescription["PetShopsPetFoodAndSupplies"] = "PetShopsPetFoodAndSupplies";
    MerchantCategoryDescription["PhotoDevelopingPhotofinishingLaboratories"] = "PhotoDevelopingPhotofinishingLaboratories";
    MerchantCategoryDescription["PhotographicStudios"] = "PhotographicStudios";
    MerchantCategoryDescription["PieceGoodsNotionsAndOtherDryGoods"] = "PieceGoodsNotionsAndOtherDryGoods";
    MerchantCategoryDescription["PlumbingAndHeatingEquipment"] = "PlumbingAndHeatingEquipment";
    MerchantCategoryDescription["PoiFundingTransactions"] = "PoiFundingTransactions";
    MerchantCategoryDescription["PoolAndBilliardEstablishments"] = "PoolAndBilliardEstablishments";
    MerchantCategoryDescription["PostalServicesGovernmentOnly"] = "PostalServicesGovernmentOnly";
    MerchantCategoryDescription["PreciousStonesAndMetalsWatchesAndJewelry"] = "PreciousStonesAndMetalsWatchesAndJewelry";
    MerchantCategoryDescription["ProfessionalServicesNotElsewhereClassified"] = "ProfessionalServicesNotElsewhereClassified";
    MerchantCategoryDescription["PublicWarehousingFarmProductsRefrigeratedGoodsHouseholdGoodsStorage"] = "PublicWarehousingFarmProductsRefrigeratedGoodsHouseholdGoodsStorage";
    MerchantCategoryDescription["QuasiCashCustomerFinancialInstitution"] = "QuasiCashCustomerFinancialInstitution";
    MerchantCategoryDescription["QuasiCashMerchant"] = "QuasiCashMerchant";
    MerchantCategoryDescription["QuickCopyReproductionAndBlueprintingServices"] = "QuickCopyReproductionAndBlueprintingServices";
    MerchantCategoryDescription["RailroadsFreight"] = "RailroadsFreight";
    MerchantCategoryDescription["RealEstateAgentsAndManagersRentals"] = "RealEstateAgentsAndManagersRentals";
    MerchantCategoryDescription["RecordShops"] = "RecordShops";
    MerchantCategoryDescription["RecreationalAndSportingCamps"] = "RecreationalAndSportingCamps";
    MerchantCategoryDescription["RecreationServicesNotElsewhereClassified"] = "RecreationServicesNotElsewhereClassified";
    MerchantCategoryDescription["ReligiousGoodsStores"] = "ReligiousGoodsStores";
    MerchantCategoryDescription["RoofingAndSidingSheetMetalWorkContractors"] = "RoofingAndSidingSheetMetalWorkContractors";
    MerchantCategoryDescription["SalvageAndWreckingYards"] = "SalvageAndWreckingYards";
    MerchantCategoryDescription["SanitationPolishingAndSpecialtyCleaningPreparations"] = "SanitationPolishingAndSpecialtyCleaningPreparations";
    MerchantCategoryDescription["SchoolsAndEducationalServicesNotElsewhereClassified"] = "SchoolsAndEducationalServicesNotElsewhereClassified";
    MerchantCategoryDescription["SchoolsBusinessAndSecretarial"] = "SchoolsBusinessAndSecretarial";
    MerchantCategoryDescription["SchoolsCorrespondence"] = "SchoolsCorrespondence";
    MerchantCategoryDescription["SchoolsElementaryAndSecondary"] = "SchoolsElementaryAndSecondary";
    MerchantCategoryDescription["SchoolsTradeAndVocational"] = "SchoolsTradeAndVocational";
    MerchantCategoryDescription["SecondHandStoresUsedMerchandiseStores"] = "SecondHandStoresUsedMerchandiseStores";
    MerchantCategoryDescription["SecuritiesBrokersDealers"] = "SecuritiesBrokersDealers";
    MerchantCategoryDescription["ServiceStationsWithOrWithoutAncillaryServices"] = "ServiceStationsWithOrWithoutAncillaryServices";
    MerchantCategoryDescription["ShoeStores"] = "ShoeStores";
    MerchantCategoryDescription["SnowmobileDealers"] = "SnowmobileDealers";
    MerchantCategoryDescription["SportingGoodsStores"] = "SportingGoodsStores";
    MerchantCategoryDescription["SportsApparelRidingApparelStores"] = "SportsApparelRidingApparelStores";
    MerchantCategoryDescription["StampAndCoinStoresPhilatelicAndNumismaticSupplies"] = "StampAndCoinStoresPhilatelicAndNumismaticSupplies";
    MerchantCategoryDescription["StationeryOfficeSuppliesPrintingAndWritingPaper"] = "StationeryOfficeSuppliesPrintingAndWritingPaper";
    MerchantCategoryDescription["StenographicAndSecretarialSupportServices"] = "StenographicAndSecretarialSupportServices";
    MerchantCategoryDescription["SwimmingPoolsSalesAndSupplies"] = "SwimmingPoolsSalesAndSupplies";
    MerchantCategoryDescription["TaxPayments"] = "TaxPayments";
    MerchantCategoryDescription["TaxPreparationService"] = "TaxPreparationService";
    MerchantCategoryDescription["TelecommunicationEquipmentIncludingTelephoneSales"] = "TelecommunicationEquipmentIncludingTelephoneSales";
    MerchantCategoryDescription["TelecommunicationServicesIncludingButNotLimitedToPrepaidPhoneServicesAndRecurringPhoneServices"] = "TelecommunicationServicesIncludingButNotLimitedToPrepaidPhoneServicesAndRecurringPhoneServices";
    MerchantCategoryDescription["TelegraphServices"] = "TelegraphServices";
    MerchantCategoryDescription["TentAndAwningShops"] = "TentAndAwningShops";
    MerchantCategoryDescription["TestingLaboratoriesNonMedical"] = "TestingLaboratoriesNonMedical";
    MerchantCategoryDescription["TheatricalProducersExceptMotionPicturesAndTicketAgencies"] = "TheatricalProducersExceptMotionPicturesAndTicketAgencies";
    MerchantCategoryDescription["Timeshares"] = "Timeshares";
    MerchantCategoryDescription["TireRetreadingAndRepairShops"] = "TireRetreadingAndRepairShops";
    MerchantCategoryDescription["TouristAttractionsAndExhibits"] = "TouristAttractionsAndExhibits";
    MerchantCategoryDescription["TowingServices"] = "TowingServices";
    MerchantCategoryDescription["TransportationServicesNotElsewhereClassified"] = "TransportationServicesNotElsewhereClassified";
    MerchantCategoryDescription["TransportationSuburbanAndLocalCommuterPassengerIncludingFerries"] = "TransportationSuburbanAndLocalCommuterPassengerIncludingFerries";
    MerchantCategoryDescription["TravelAgenciesAndTourOperators"] = "TravelAgenciesAndTourOperators";
    MerchantCategoryDescription["TruckRental"] = "TruckRental";
    MerchantCategoryDescription["TypesettingPlateMakingAndRelatedServices"] = "TypesettingPlateMakingAndRelatedServices";
    MerchantCategoryDescription["TypewriterStoresRentalsSalesService"] = "TypewriterStoresRentalsSalesService";
    MerchantCategoryDescription["Unknown"] = "Unknown";
    MerchantCategoryDescription["UtilitiesElectricGasHeatingOilSanitaryWater"] = "UtilitiesElectricGasHeatingOilSanitaryWater";
    MerchantCategoryDescription["VarietyStores"] = "VarietyStores";
    MerchantCategoryDescription["VeterinaryServices"] = "VeterinaryServices";
    MerchantCategoryDescription["VideoAmusementGameSupplies"] = "VideoAmusementGameSupplies";
    MerchantCategoryDescription["VideoEntertainmentRentalStores"] = "VideoEntertainmentRentalStores";
    MerchantCategoryDescription["VideoGameArcadesOrEstablishments"] = "VideoGameArcadesOrEstablishments";
    MerchantCategoryDescription["WeldingRepair"] = "WeldingRepair";
    MerchantCategoryDescription["WholesaleClubs"] = "WholesaleClubs";
    MerchantCategoryDescription["WigAndToupeeShops"] = "WigAndToupeeShops";
    MerchantCategoryDescription["WomenAccessoryAndSpecialtyStores"] = "WomenAccessoryAndSpecialtyStores";
    MerchantCategoryDescription["WomenReadyToWearStores"] = "WomenReadyToWearStores";
})(MerchantCategoryDescription || (exports.MerchantCategoryDescription = MerchantCategoryDescription = {}));
var MerchantPaymentLinkStatus;
(function (MerchantPaymentLinkStatus) {
    MerchantPaymentLinkStatus["Active"] = "Active";
    MerchantPaymentLinkStatus["Expired"] = "Expired";
    MerchantPaymentLinkStatus["Completed"] = "Completed";
    MerchantPaymentLinkStatus["Canceled"] = "Canceled";
})(MerchantPaymentLinkStatus || (exports.MerchantPaymentLinkStatus = MerchantPaymentLinkStatus = {}));
/** The different statuses a MerchantPaymentMethod can have */
var MerchantPaymentMethodStatus;
(function (MerchantPaymentMethodStatus) {
    MerchantPaymentMethodStatus["PendingReview"] = "PendingReview";
    MerchantPaymentMethodStatus["Enabled"] = "Enabled";
    MerchantPaymentMethodStatus["Rejected"] = "Rejected";
    MerchantPaymentMethodStatus["Disabled"] = "Disabled";
    MerchantPaymentMethodStatus["Canceled"] = "Canceled";
    MerchantPaymentMethodStatus["Suspended"] = "Suspended";
})(MerchantPaymentMethodStatus || (exports.MerchantPaymentMethodStatus = MerchantPaymentMethodStatus = {}));
/** The different statuses a MerchantPaymentMethod can have */
var MerchantPaymentMethodType;
(function (MerchantPaymentMethodType) {
    MerchantPaymentMethodType["InternalDirectDebitStandard"] = "InternalDirectDebitStandard";
    MerchantPaymentMethodType["InternalDirectDebitB2b"] = "InternalDirectDebitB2b";
    MerchantPaymentMethodType["SepaDirectDebitCore"] = "SepaDirectDebitCore";
    MerchantPaymentMethodType["SepaDirectDebitB2b"] = "SepaDirectDebitB2b";
    MerchantPaymentMethodType["Check"] = "Check";
    MerchantPaymentMethodType["Card"] = "Card";
})(MerchantPaymentMethodType || (exports.MerchantPaymentMethodType = MerchantPaymentMethodType = {}));
var MerchantProfileOrderByFieldInput;
(function (MerchantProfileOrderByFieldInput) {
    MerchantProfileOrderByFieldInput["createdAt"] = "createdAt";
    MerchantProfileOrderByFieldInput["updatedAt"] = "updatedAt";
})(MerchantProfileOrderByFieldInput || (exports.MerchantProfileOrderByFieldInput = MerchantProfileOrderByFieldInput = {}));
/** Merchant Profile Statuses */
var MerchantProfileStatus;
(function (MerchantProfileStatus) {
    MerchantProfileStatus["PendingReview"] = "PendingReview";
    MerchantProfileStatus["Enabled"] = "Enabled";
    MerchantProfileStatus["Rejected"] = "Rejected";
    MerchantProfileStatus["Canceled"] = "Canceled";
    MerchantProfileStatus["Suspended"] = "Suspended";
})(MerchantProfileStatus || (exports.MerchantProfileStatus = MerchantProfileStatus = {}));
/** Monthly income. */
var MonthlyIncome;
(function (MonthlyIncome) {
    MonthlyIncome["LessThan500"] = "LessThan500";
    MonthlyIncome["Between500And1500"] = "Between500And1500";
    MonthlyIncome["Between1500And3000"] = "Between1500And3000";
    MonthlyIncome["Between3000And4500"] = "Between3000And4500";
    MonthlyIncome["MoreThan4500"] = "MoreThan4500";
})(MonthlyIncome || (exports.MonthlyIncome = MonthlyIncome = {}));
/** Monthly payment volume. */
var MonthlyPaymentVolume;
(function (MonthlyPaymentVolume) {
    MonthlyPaymentVolume["Between10000And50000"] = "Between10000And50000";
    MonthlyPaymentVolume["Between50000And100000"] = "Between50000And100000";
    MonthlyPaymentVolume["LessThan10000"] = "LessThan10000";
    MonthlyPaymentVolume["MoreThan100000"] = "MoreThan100000";
})(MonthlyPaymentVolume || (exports.MonthlyPaymentVolume = MonthlyPaymentVolume = {}));
/** Field we can use when ordering that can be applied when listing onboardings */
var OnboardingOrderByFieldInput;
(function (OnboardingOrderByFieldInput) {
    OnboardingOrderByFieldInput["createdAt"] = "createdAt";
    OnboardingOrderByFieldInput["updatedAt"] = "updatedAt";
    OnboardingOrderByFieldInput["finalizedAt"] = "finalizedAt";
})(OnboardingOrderByFieldInput || (exports.OnboardingOrderByFieldInput = OnboardingOrderByFieldInput = {}));
/** Onboarding process state */
var OnboardingState;
(function (OnboardingState) {
    OnboardingState["Ongoing"] = "Ongoing";
    OnboardingState["Completed"] = "Completed";
})(OnboardingState || (exports.OnboardingState = OnboardingState = {}));
/** Possible values for onboarding status */
var OnboardingStatus;
(function (OnboardingStatus) {
    OnboardingStatus["Finalized"] = "Finalized";
    OnboardingStatus["Invalid"] = "Invalid";
    OnboardingStatus["Valid"] = "Valid";
})(OnboardingStatus || (exports.OnboardingStatus = OnboardingStatus = {}));
var OrderByDirection;
(function (OrderByDirection) {
    OrderByDirection["Asc"] = "Asc";
    OrderByDirection["Desc"] = "Desc";
})(OrderByDirection || (exports.OrderByDirection = OrderByDirection = {}));
/** Specific type for closing account action */
var PartnerCloseAccountReasonType;
(function (PartnerCloseAccountReasonType) {
    PartnerCloseAccountReasonType["ClosingRequested"] = "ClosingRequested";
})(PartnerCloseAccountReasonType || (exports.PartnerCloseAccountReasonType = PartnerCloseAccountReasonType = {}));
var PartnershipStatus;
(function (PartnershipStatus) {
    PartnershipStatus["Accepted"] = "Accepted";
    PartnershipStatus["Canceling"] = "Canceling";
    PartnershipStatus["Canceled"] = "Canceled";
})(PartnershipStatus || (exports.PartnershipStatus = PartnershipStatus = {}));
var PaymentAccountType;
(function (PaymentAccountType) {
    PaymentAccountType["EMoney"] = "EMoney";
    PaymentAccountType["PaymentService"] = "PaymentService";
})(PaymentAccountType || (exports.PaymentAccountType = PaymentAccountType = {}));
/** Payment Level of the account */
var PaymentLevel;
(function (PaymentLevel) {
    PaymentLevel["Limited"] = "Limited";
    PaymentLevel["Unlimited"] = "Unlimited";
})(PaymentLevel || (exports.PaymentLevel = PaymentLevel = {}));
var PaymentLinkSequenceType;
(function (PaymentLinkSequenceType) {
    PaymentLinkSequenceType["OneOff"] = "OneOff";
    PaymentLinkSequenceType["Recurrent"] = "Recurrent";
})(PaymentLinkSequenceType || (exports.PaymentLinkSequenceType = PaymentLinkSequenceType = {}));
var PaymentMandateCanceledReason;
(function (PaymentMandateCanceledReason) {
    PaymentMandateCanceledReason["RequestedByUser"] = "RequestedByUser";
    PaymentMandateCanceledReason["MandateExpired"] = "MandateExpired";
})(PaymentMandateCanceledReason || (exports.PaymentMandateCanceledReason = PaymentMandateCanceledReason = {}));
/** Field we can use when ordering that can be applied when listing payment mandate results */
var PaymentMandateOrderByFieldInput;
(function (PaymentMandateOrderByFieldInput) {
    PaymentMandateOrderByFieldInput["createdAt"] = "createdAt";
    PaymentMandateOrderByFieldInput["updatedAt"] = "updatedAt";
})(PaymentMandateOrderByFieldInput || (exports.PaymentMandateOrderByFieldInput = PaymentMandateOrderByFieldInput = {}));
var PaymentMandateScheme;
(function (PaymentMandateScheme) {
    PaymentMandateScheme["SepaDirectDebitCore"] = "SepaDirectDebitCore";
    PaymentMandateScheme["SepaDirectDebitB2b"] = "SepaDirectDebitB2b";
    PaymentMandateScheme["InternalDirectDebitStandard"] = "InternalDirectDebitStandard";
    PaymentMandateScheme["InternalDirectDebitB2b"] = "InternalDirectDebitB2b";
})(PaymentMandateScheme || (exports.PaymentMandateScheme = PaymentMandateScheme = {}));
/** Payment Mandate Sequence */
var PaymentMandateSequence;
(function (PaymentMandateSequence) {
    PaymentMandateSequence["Recurrent"] = "Recurrent";
    PaymentMandateSequence["OneOff"] = "OneOff";
})(PaymentMandateSequence || (exports.PaymentMandateSequence = PaymentMandateSequence = {}));
/** Payment Mandate status */
var PaymentMandateStatus;
(function (PaymentMandateStatus) {
    PaymentMandateStatus["ConsentPending"] = "ConsentPending";
    PaymentMandateStatus["Enabled"] = "Enabled";
    PaymentMandateStatus["Rejected"] = "Rejected";
    PaymentMandateStatus["Canceled"] = "Canceled";
})(PaymentMandateStatus || (exports.PaymentMandateStatus = PaymentMandateStatus = {}));
/** Field we can use when ordering that can be applied when listing payment */
var PaymentOrderByFieldInput;
(function (PaymentOrderByFieldInput) {
    PaymentOrderByFieldInput["createdAt"] = "createdAt";
    PaymentOrderByFieldInput["updatedAt"] = "updatedAt";
})(PaymentOrderByFieldInput || (exports.PaymentOrderByFieldInput = PaymentOrderByFieldInput = {}));
/** Payment product */
var PaymentProduct;
(function (PaymentProduct) {
    PaymentProduct["InternalCreditTransfer"] = "InternalCreditTransfer";
    PaymentProduct["SEPACreditTransfer"] = "SEPACreditTransfer";
    PaymentProduct["SEPADirectDebit"] = "SEPADirectDebit";
    PaymentProduct["Card"] = "Card";
    PaymentProduct["Fees"] = "Fees";
    PaymentProduct["InternalDirectDebit"] = "InternalDirectDebit";
    PaymentProduct["Check"] = "Check";
    PaymentProduct["InternationalCreditTransfer"] = "InternationalCreditTransfer";
})(PaymentProduct || (exports.PaymentProduct = PaymentProduct = {}));
/** Payment status */
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["ConsentPending"] = "ConsentPending";
    PaymentStatus["Initiated"] = "Initiated";
    PaymentStatus["Rejected"] = "Rejected";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
/** Pending Digital Card Status */
var PendingDigitalCardStatus;
(function (PendingDigitalCardStatus) {
    PendingDigitalCardStatus["ConsentPending"] = "ConsentPending";
    PendingDigitalCardStatus["Pending"] = "Pending";
    PendingDigitalCardStatus["Declined"] = "Declined";
})(PendingDigitalCardStatus || (exports.PendingDigitalCardStatus = PendingDigitalCardStatus = {}));
/** Physical Card Status */
var PhysicalCardStatus;
(function (PhysicalCardStatus) {
    PhysicalCardStatus["ConsentPending"] = "ConsentPending";
    PhysicalCardStatus["Processing"] = "Processing";
    PhysicalCardStatus["Activated"] = "Activated";
    PhysicalCardStatus["Suspended"] = "Suspended";
    PhysicalCardStatus["Canceled"] = "Canceled";
    PhysicalCardStatus["Canceling"] = "Canceling";
    PhysicalCardStatus["ToActivate"] = "ToActivate";
    PhysicalCardStatus["ToRenew"] = "ToRenew";
    PhysicalCardStatus["Renewed"] = "Renewed";
})(PhysicalCardStatus || (exports.PhysicalCardStatus = PhysicalCardStatus = {}));
var PreferredNotificationChannel;
(function (PreferredNotificationChannel) {
    PreferredNotificationChannel["Sms"] = "Sms";
    PreferredNotificationChannel["App"] = "App";
})(PreferredNotificationChannel || (exports.PreferredNotificationChannel = PreferredNotificationChannel = {}));
/** Type of product sold. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities */
var ProductType;
(function (ProductType) {
    ProductType["Goods"] = "Goods";
    ProductType["Services"] = "Services";
    ProductType["VirtualGoods"] = "VirtualGoods";
    ProductType["GiftsAndDonations"] = "GiftsAndDonations";
})(ProductType || (exports.ProductType = ProductType = {}));
/** Project Card Settings Background Type */
var ProjectCardSettingsBackgroundType;
(function (ProjectCardSettingsBackgroundType) {
    ProjectCardSettingsBackgroundType["Black"] = "Black";
    ProjectCardSettingsBackgroundType["Silver"] = "Silver";
    ProjectCardSettingsBackgroundType["Custom"] = "Custom";
})(ProjectCardSettingsBackgroundType || (exports.ProjectCardSettingsBackgroundType = ProjectCardSettingsBackgroundType = {}));
/** Card Status */
var ProjectCardStatus;
(function (ProjectCardStatus) {
    ProjectCardStatus["Initiated"] = "Initiated";
    ProjectCardStatus["Enabled"] = "Enabled";
    ProjectCardStatus["Disabled"] = "Disabled";
    ProjectCardStatus["ToReview"] = "ToReview";
    ProjectCardStatus["Suspended"] = "Suspended";
    ProjectCardStatus["Rejected"] = "Rejected";
})(ProjectCardStatus || (exports.ProjectCardStatus = ProjectCardStatus = {}));
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["Initiated"] = "Initiated";
    ProjectStatus["MeetingScheduled"] = "MeetingScheduled";
    ProjectStatus["ToReview"] = "ToReview";
    ProjectStatus["PendingCompliance"] = "PendingCompliance";
    ProjectStatus["LimitedLiveAccess"] = "LimitedLiveAccess";
    ProjectStatus["BetaLiveAccess"] = "BetaLiveAccess";
    ProjectStatus["Enabled"] = "Enabled";
    ProjectStatus["FullLiveAccess"] = "FullLiveAccess";
    ProjectStatus["Disabled"] = "Disabled";
    ProjectStatus["Suspended"] = "Suspended";
    ProjectStatus["Rejected"] = "Rejected";
    ProjectStatus["PendingLiveReview"] = "PendingLiveReview";
})(ProjectStatus || (exports.ProjectStatus = ProjectStatus = {}));
var ProjectType;
(function (ProjectType) {
    ProjectType["INDIVIDUAL"] = "INDIVIDUAL";
    ProjectType["COMPANY"] = "COMPANY";
    ProjectType["COMPANY_AND_CUSTOMERS"] = "COMPANY_AND_CUSTOMERS";
    ProjectType["Individual"] = "Individual";
    ProjectType["Company"] = "Company";
    ProjectType["CompanyAndCustomers"] = "CompanyAndCustomers";
})(ProjectType || (exports.ProjectType = ProjectType = {}));
/** Received Direct Debit Mandate Scheme */
var ReceivedDirectDebitMandateScheme;
(function (ReceivedDirectDebitMandateScheme) {
    ReceivedDirectDebitMandateScheme["SepaDirectDebitB2b"] = "SepaDirectDebitB2b";
    ReceivedDirectDebitMandateScheme["SepaDirectDebitCore"] = "SepaDirectDebitCore";
})(ReceivedDirectDebitMandateScheme || (exports.ReceivedDirectDebitMandateScheme = ReceivedDirectDebitMandateScheme = {}));
/** Received Direct Debit Mandate Statuses */
var ReceivedDirectDebitMandateStatus;
(function (ReceivedDirectDebitMandateStatus) {
    ReceivedDirectDebitMandateStatus["Enabled"] = "Enabled";
    ReceivedDirectDebitMandateStatus["Suspended"] = "Suspended";
    ReceivedDirectDebitMandateStatus["Canceled"] = "Canceled";
    ReceivedDirectDebitMandateStatus["ConsentInitiationPending"] = "ConsentInitiationPending";
    ReceivedDirectDebitMandateStatus["ConsentPending"] = "ConsentPending";
})(ReceivedDirectDebitMandateStatus || (exports.ReceivedDirectDebitMandateStatus = ReceivedDirectDebitMandateStatus = {}));
/** Reason code that explains why we can't refund the transactions */
var RefundRejectionCode;
(function (RefundRejectionCode) {
    RefundRejectionCode["TransactionNotFound"] = "TransactionNotFound";
    RefundRejectionCode["TransactionNonRefundable"] = "TransactionNonRefundable";
    RefundRejectionCode["ServerError"] = "ServerError";
})(RefundRejectionCode || (exports.RefundRejectionCode = RefundRejectionCode = {}));
/** Funding Source Rejected Reason */
var RejectedFundingSourceReason;
(function (RejectedFundingSourceReason) {
    RejectedFundingSourceReason["AccountVerificationRejected"] = "AccountVerificationRejected";
})(RejectedFundingSourceReason || (exports.RejectedFundingSourceReason = RejectedFundingSourceReason = {}));
/** The following reason code for a rejected transaction are defined: */
var RejectedReasonCode;
(function (RejectedReasonCode) {
    RejectedReasonCode["AccountClosed"] = "AccountClosed";
    RejectedReasonCode["AccountHolderDeceased"] = "AccountHolderDeceased";
    RejectedReasonCode["AccountMembershipRefused"] = "AccountMembershipRefused";
    RejectedReasonCode["AccountSuspended"] = "AccountSuspended";
    RejectedReasonCode["AccountUnknown"] = "AccountUnknown";
    RejectedReasonCode["AmountMismatch"] = "AmountMismatch";
    RejectedReasonCode["BankRefused"] = "BankRefused";
    RejectedReasonCode["BeneficiaryBankNotReachable"] = "BeneficiaryBankNotReachable";
    RejectedReasonCode["BeneficiaryMissingOrIncorrect"] = "BeneficiaryMissingOrIncorrect";
    RejectedReasonCode["CardExpired"] = "CardExpired";
    RejectedReasonCode["CardPermanentlyBlocked"] = "CardPermanentlyBlocked";
    RejectedReasonCode["CardSuspended"] = "CardSuspended";
    RejectedReasonCode["CheckReceivedLate"] = "CheckReceivedLate";
    RejectedReasonCode["CreditorBankOffline"] = "CreditorBankOffline";
    RejectedReasonCode["CreditorBankTechnicalErrorOccurred"] = "CreditorBankTechnicalErrorOccurred";
    RejectedReasonCode["CreditorBankTimeout"] = "CreditorBankTimeout";
    RejectedReasonCode["DateMissing"] = "DateMissing";
    RejectedReasonCode["DateInvalid"] = "DateInvalid";
    RejectedReasonCode["DebtorAccountClosed"] = "DebtorAccountClosed";
    RejectedReasonCode["DebtorAccountConsumer"] = "DebtorAccountConsumer";
    RejectedReasonCode["DebtorAccountUnknown"] = "DebtorAccountUnknown";
    RejectedReasonCode["DebtorBankOffline"] = "DebtorBankOffline";
    RejectedReasonCode["DebtorBankTechnicalErrorOccurred"] = "DebtorBankTechnicalErrorOccurred";
    RejectedReasonCode["DebtorBankTimeout"] = "DebtorBankTimeout";
    RejectedReasonCode["DebtorDeceased"] = "DebtorDeceased";
    RejectedReasonCode["DebtorNameMissing"] = "DebtorNameMissing";
    RejectedReasonCode["EndorsementMissing"] = "EndorsementMissing";
    RejectedReasonCode["FraudSuspected"] = "FraudSuspected";
    RejectedReasonCode["IbanInvalid"] = "IbanInvalid";
    RejectedReasonCode["IbanSuspended"] = "IbanSuspended";
    RejectedReasonCode["InsufficientFunds"] = "InsufficientFunds";
    RejectedReasonCode["InvalidTransferDate"] = "InvalidTransferDate";
    RejectedReasonCode["InvalidOrMissingAmount"] = "InvalidOrMissingAmount";
    RejectedReasonCode["MandateInvalid"] = "MandateInvalid";
    RejectedReasonCode["NoMandate"] = "NoMandate";
    RejectedReasonCode["PartnerRefused"] = "PartnerRefused";
    RejectedReasonCode["PartnerTechnicalErrorOccurred"] = "PartnerTechnicalErrorOccurred";
    RejectedReasonCode["PeriodAmountLimitExceeded"] = "PeriodAmountLimitExceeded";
    RejectedReasonCode["PeriodNbTransactionLimitExceeded"] = "PeriodNbTransactionLimitExceeded";
    RejectedReasonCode["ReasonNotSpecifiedByBank"] = "ReasonNotSpecifiedByBank";
    RejectedReasonCode["ReasonNotSpecifiedByDebtor"] = "ReasonNotSpecifiedByDebtor";
    RejectedReasonCode["RegulatoryReason"] = "RegulatoryReason";
    RejectedReasonCode["SignatureMissing"] = "SignatureMissing";
    RejectedReasonCode["SuspiciousCheck"] = "SuspiciousCheck";
    RejectedReasonCode["SwanOffline"] = "SwanOffline";
    RejectedReasonCode["SwanRefused"] = "SwanRefused";
    RejectedReasonCode["SwanTechnicalErrorOccurred"] = "SwanTechnicalErrorOccurred";
    RejectedReasonCode["SwanTimeout"] = "SwanTimeout";
    RejectedReasonCode["TermsAndConditionsLimitExceeded"] = "TermsAndConditionsLimitExceeded";
    RejectedReasonCode["TransactionAmountLimitExceeded"] = "TransactionAmountLimitExceeded";
    RejectedReasonCode["TransactionDuplicated"] = "TransactionDuplicated";
    RejectedReasonCode["TransactionOnAccountTypeNotAllowed"] = "TransactionOnAccountTypeNotAllowed";
    RejectedReasonCode["TransactionTypeNotAllowed"] = "TransactionTypeNotAllowed";
    RejectedReasonCode["CardNotActivated"] = "CardNotActivated";
    RejectedReasonCode["InvalidPin"] = "InvalidPin";
    RejectedReasonCode["InvalidPinAttemptsExceeded"] = "InvalidPinAttemptsExceeded";
    RejectedReasonCode["MerchantShouldResubmitAuthorization"] = "MerchantShouldResubmitAuthorization";
    RejectedReasonCode["InvalidExpirationDate"] = "InvalidExpirationDate";
    RejectedReasonCode["InvalidSecurityNumber"] = "InvalidSecurityNumber";
    RejectedReasonCode["PinRequiredForFurtherTransaction"] = "PinRequiredForFurtherTransaction";
    RejectedReasonCode["RetryWithChipAndPin"] = "RetryWithChipAndPin";
})(RejectedReasonCode || (exports.RejectedReasonCode = RejectedReasonCode = {}));
/** Rejected Verification Reason */
var RejectedVerificationReason;
(function (RejectedVerificationReason) {
    RejectedVerificationReason["HolderDidNotMatch"] = "HolderDidNotMatch";
})(RejectedVerificationReason || (exports.RejectedVerificationReason = RejectedVerificationReason = {}));
var ReleasedReason;
(function (ReleasedReason) {
    ReleasedReason["Captured"] = "Captured";
    ReleasedReason["Expired"] = "Expired";
    ReleasedReason["AdviceReceived"] = "AdviceReceived";
    ReleasedReason["MerchantReleased"] = "MerchantReleased";
    ReleasedReason["ManuallyReleased"] = "ManuallyReleased";
    ReleasedReason["Other"] = "Other";
})(ReleasedReason || (exports.ReleasedReason = ReleasedReason = {}));
/** Request Merchant Profile Update Statuses */
var RequestMerchantProfileUpdateStatus;
(function (RequestMerchantProfileUpdateStatus) {
    RequestMerchantProfileUpdateStatus["PendingReview"] = "PendingReview";
    RequestMerchantProfileUpdateStatus["Enabled"] = "Enabled";
    RequestMerchantProfileUpdateStatus["Rejected"] = "Rejected";
})(RequestMerchantProfileUpdateStatus || (exports.RequestMerchantProfileUpdateStatus = RequestMerchantProfileUpdateStatus = {}));
/** Scheme that will be used to create the underlying payment mandate for this funding source */
var SEPADirectDebitScheme;
(function (SEPADirectDebitScheme) {
    SEPADirectDebitScheme["SepaDirectDebitCore"] = "SepaDirectDebitCore";
    SEPADirectDebitScheme["SepaDirectDebitB2b"] = "SepaDirectDebitB2b";
})(SEPADirectDebitScheme || (exports.SEPADirectDebitScheme = SEPADirectDebitScheme = {}));
var SEPAPaymentMandateScheme;
(function (SEPAPaymentMandateScheme) {
    SEPAPaymentMandateScheme["SepaDirectDebitCore"] = "SepaDirectDebitCore";
    SEPAPaymentMandateScheme["SepaDirectDebitB2b"] = "SepaDirectDebitB2b";
})(SEPAPaymentMandateScheme || (exports.SEPAPaymentMandateScheme = SEPAPaymentMandateScheme = {}));
/** SEPA Direct Debit Payment Mandate Sequence */
var SEPAPaymentMandateSequence;
(function (SEPAPaymentMandateSequence) {
    SEPAPaymentMandateSequence["Recurrent"] = "Recurrent";
    SEPAPaymentMandateSequence["OneOff"] = "OneOff";
})(SEPAPaymentMandateSequence || (exports.SEPAPaymentMandateSequence = SEPAPaymentMandateSequence = {}));
/** Received SEPA direct debit mandate scheme */
var SEPAReceivedDirectDebitMandateScheme;
(function (SEPAReceivedDirectDebitMandateScheme) {
    SEPAReceivedDirectDebitMandateScheme["SepaDirectDebitB2b"] = "SepaDirectDebitB2b";
    SEPAReceivedDirectDebitMandateScheme["SepaDirectDebitCore"] = "SepaDirectDebitCore";
})(SEPAReceivedDirectDebitMandateScheme || (exports.SEPAReceivedDirectDebitMandateScheme = SEPAReceivedDirectDebitMandateScheme = {}));
/** SEPA received direct debit mandate sequence */
var SEPAReceivedDirectDebitMandateSequence;
(function (SEPAReceivedDirectDebitMandateSequence) {
    SEPAReceivedDirectDebitMandateSequence["OneOff"] = "OneOff";
    SEPAReceivedDirectDebitMandateSequence["Recurrent"] = "Recurrent";
})(SEPAReceivedDirectDebitMandateSequence || (exports.SEPAReceivedDirectDebitMandateSequence = SEPAReceivedDirectDebitMandateSequence = {}));
/** Status of the shareholder during the process with Swan. */
var ShareholderStatus;
(function (ShareholderStatus) {
    ShareholderStatus["PendingOnboarding"] = "PendingOnboarding";
    ShareholderStatus["WaitingForVerification"] = "WaitingForVerification";
    ShareholderStatus["WaitingForTransfer"] = "WaitingForTransfer";
    ShareholderStatus["CapitalTransferred"] = "CapitalTransferred";
    ShareholderStatus["CapitalFundsWiredToNotary"] = "CapitalFundsWiredToNotary";
})(ShareholderStatus || (exports.ShareholderStatus = ShareholderStatus = {}));
/** Shareholder type to identify individuals and companies. */
var ShareholderType;
(function (ShareholderType) {
    ShareholderType["Individual"] = "Individual";
    ShareholderType["Company"] = "Company";
})(ShareholderType || (exports.ShareholderType = ShareholderType = {}));
var SimulationCardType;
(function (SimulationCardType) {
    SimulationCardType["Physical"] = "Physical";
    SimulationCardType["Virtual"] = "Virtual";
})(SimulationCardType || (exports.SimulationCardType = SimulationCardType = {}));
/** Available period to compute spending limits */
var SpendingLimitPeriod;
(function (SpendingLimitPeriod) {
    SpendingLimitPeriod["Monthly"] = "Monthly";
    SpendingLimitPeriod["Weekly"] = "Weekly";
    SpendingLimitPeriod["Daily"] = "Daily";
    SpendingLimitPeriod["Always"] = "Always";
})(SpendingLimitPeriod || (exports.SpendingLimitPeriod = SpendingLimitPeriod = {}));
/** Available period to compute spending limits */
var SpendingLimitPeriodInput;
(function (SpendingLimitPeriodInput) {
    SpendingLimitPeriodInput["Monthly"] = "Monthly";
    SpendingLimitPeriodInput["Weekly"] = "Weekly";
    SpendingLimitPeriodInput["Daily"] = "Daily";
    SpendingLimitPeriodInput["Always"] = "Always";
})(SpendingLimitPeriodInput || (exports.SpendingLimitPeriodInput = SpendingLimitPeriodInput = {}));
/** Available type of spending limits */
var SpendingLimitType;
(function (SpendingLimitType) {
    SpendingLimitType["AccountHolder"] = "AccountHolder";
    SpendingLimitType["Partner"] = "Partner";
})(SpendingLimitType || (exports.SpendingLimitType = SpendingLimitType = {}));
var StandingOrderPeriod;
(function (StandingOrderPeriod) {
    StandingOrderPeriod["Daily"] = "Daily";
    StandingOrderPeriod["Weekly"] = "Weekly";
    StandingOrderPeriod["Monthly"] = "Monthly";
})(StandingOrderPeriod || (exports.StandingOrderPeriod = StandingOrderPeriod = {}));
var StandingOrderStatus;
(function (StandingOrderStatus) {
    StandingOrderStatus["ConsentPending"] = "ConsentPending";
    StandingOrderStatus["Enabled"] = "Enabled";
    StandingOrderStatus["Canceled"] = "Canceled";
})(StandingOrderStatus || (exports.StandingOrderStatus = StandingOrderStatus = {}));
/** The different periods of statement */
var StatementPeriod;
(function (StatementPeriod) {
    StatementPeriod["Monthly"] = "Monthly";
    StatementPeriod["Custom"] = "Custom";
})(StatementPeriod || (exports.StatementPeriod = StatementPeriod = {}));
/** The different statuses of statement */
var StatementStatus;
(function (StatementStatus) {
    StatementStatus["Available"] = "Available";
    StatementStatus["Failed"] = "Failed";
    StatementStatus["Pending"] = "Pending";
})(StatementStatus || (exports.StatementStatus = StatementStatus = {}));
/** The different type of statement actually available
- PDF will be a PDF file with the statement information */
var StatementType;
(function (StatementType) {
    StatementType["PDF"] = "PDF";
    StatementType["CSV"] = "CSV";
})(StatementType || (exports.StatementType = StatementType = {}));
var StatusText;
(function (StatusText) {
    StatusText["Success"] = "Success";
    StatusText["Failure"] = "Failure";
})(StatusText || (exports.StatusText = StatusText = {}));
/** Verification status of a supporting document collection */
var SupportingDocumentCollectionStatus;
(function (SupportingDocumentCollectionStatus) {
    SupportingDocumentCollectionStatus["WaitingForDocument"] = "WaitingForDocument";
    SupportingDocumentCollectionStatus["PendingReview"] = "PendingReview";
    SupportingDocumentCollectionStatus["Approved"] = "Approved";
    SupportingDocumentCollectionStatus["Canceled"] = "Canceled";
    SupportingDocumentCollectionStatus["Rejected"] = "Rejected";
})(SupportingDocumentCollectionStatus || (exports.SupportingDocumentCollectionStatus = SupportingDocumentCollectionStatus = {}));
var SupportingDocumentCollectMode;
(function (SupportingDocumentCollectMode) {
    SupportingDocumentCollectMode["API"] = "API";
    SupportingDocumentCollectMode["EndCustomer"] = "EndCustomer";
    SupportingDocumentCollectMode["Partner"] = "Partner";
})(SupportingDocumentCollectMode || (exports.SupportingDocumentCollectMode = SupportingDocumentCollectMode = {}));
var SupportingDocumentCommunicationLanguageSettings;
(function (SupportingDocumentCommunicationLanguageSettings) {
    SupportingDocumentCommunicationLanguageSettings["en"] = "en";
    SupportingDocumentCommunicationLanguageSettings["fr"] = "fr";
})(SupportingDocumentCommunicationLanguageSettings || (exports.SupportingDocumentCommunicationLanguageSettings = SupportingDocumentCommunicationLanguageSettings = {}));
/** Supporting document purpose */
var SupportingDocumentPurposeEnum;
(function (SupportingDocumentPurposeEnum) {
    SupportingDocumentPurposeEnum["AssociationRegistration"] = "AssociationRegistration";
    SupportingDocumentPurposeEnum["Banking"] = "Banking";
    SupportingDocumentPurposeEnum["CompanyRegistration"] = "CompanyRegistration";
    SupportingDocumentPurposeEnum["GeneralAssemblyMinutes"] = "GeneralAssemblyMinutes";
    SupportingDocumentPurposeEnum["Other"] = "Other";
    SupportingDocumentPurposeEnum["PowerOfAttorney"] = "PowerOfAttorney";
    SupportingDocumentPurposeEnum["ProofOfCompanyAddress"] = "ProofOfCompanyAddress";
    SupportingDocumentPurposeEnum["ProofOfCompanyIncome"] = "ProofOfCompanyIncome";
    SupportingDocumentPurposeEnum["ProofOfIdentity"] = "ProofOfIdentity";
    SupportingDocumentPurposeEnum["ProofOfIndividualAddress"] = "ProofOfIndividualAddress";
    SupportingDocumentPurposeEnum["ProofOfIndividualIncome"] = "ProofOfIndividualIncome";
    SupportingDocumentPurposeEnum["ProofOfOriginOfFunds"] = "ProofOfOriginOfFunds";
    SupportingDocumentPurposeEnum["SignedStatus"] = "SignedStatus";
    SupportingDocumentPurposeEnum["UBODeclaration"] = "UBODeclaration";
    SupportingDocumentPurposeEnum["SwornStatement"] = "SwornStatement";
    SupportingDocumentPurposeEnum["LegalRepresentativeProofOfIdentity"] = "LegalRepresentativeProofOfIdentity";
    SupportingDocumentPurposeEnum["UltimateBeneficialOwnerProofOfIdentity"] = "UltimateBeneficialOwnerProofOfIdentity";
    SupportingDocumentPurposeEnum["NIFAccreditationCard"] = "NIFAccreditationCard";
    SupportingDocumentPurposeEnum["PresidentDecisionOfAppointment"] = "PresidentDecisionOfAppointment";
    SupportingDocumentPurposeEnum["AdministratorDecisionOfAppointment"] = "AdministratorDecisionOfAppointment";
    SupportingDocumentPurposeEnum["FinancialStatements"] = "FinancialStatements";
    SupportingDocumentPurposeEnum["UltimateBeneficialOwnerProofOfAddress"] = "UltimateBeneficialOwnerProofOfAddress";
})(SupportingDocumentPurposeEnum || (exports.SupportingDocumentPurposeEnum = SupportingDocumentPurposeEnum = {}));
/** Verification status of a document */
var SupportingDocumentStatus;
(function (SupportingDocumentStatus) {
    SupportingDocumentStatus["WaitingForUpload"] = "WaitingForUpload";
    SupportingDocumentStatus["Uploaded"] = "Uploaded";
    SupportingDocumentStatus["Validated"] = "Validated";
    SupportingDocumentStatus["Refused"] = "Refused";
    SupportingDocumentStatus["NotUploaded"] = "NotUploaded";
})(SupportingDocumentStatus || (exports.SupportingDocumentStatus = SupportingDocumentStatus = {}));
/** Specific type for document */
var SupportingDocumentType;
(function (SupportingDocumentType) {
    SupportingDocumentType["Selfie"] = "Selfie";
    SupportingDocumentType["Passport"] = "Passport";
    SupportingDocumentType["NationalIdCard"] = "NationalIdCard";
    SupportingDocumentType["ResidentPermit"] = "ResidentPermit";
    SupportingDocumentType["DrivingLicense"] = "DrivingLicense";
    SupportingDocumentType["UtilityBill"] = "UtilityBill";
    SupportingDocumentType["PhoneBill"] = "PhoneBill";
    SupportingDocumentType["RentReceipt"] = "RentReceipt";
    SupportingDocumentType["HomeInsurance"] = "HomeInsurance";
    SupportingDocumentType["IncomeTaxReturn"] = "IncomeTaxReturn";
    SupportingDocumentType["PaySlip"] = "PaySlip";
    SupportingDocumentType["RegisterExtract"] = "RegisterExtract";
    SupportingDocumentType["ArticlesOfIncorporation"] = "ArticlesOfIncorporation";
    SupportingDocumentType["CapitalShareDepositCertificate"] = "CapitalShareDepositCertificate";
    SupportingDocumentType["UBODeclaration"] = "UBODeclaration";
    SupportingDocumentType["JOAFFEExtract"] = "JOAFFEExtract";
    SupportingDocumentType["CompanyLeaseAgreement"] = "CompanyLeaseAgreement";
    SupportingDocumentType["BankStatement"] = "BankStatement";
    SupportingDocumentType["BankAccountDetails"] = "BankAccountDetails";
    SupportingDocumentType["PowerOfAttorney"] = "PowerOfAttorney";
    SupportingDocumentType["CorporateIncomeTaxReturn"] = "CorporateIncomeTaxReturn";
    SupportingDocumentType["Other"] = "Other";
    SupportingDocumentType["ByLaws"] = "ByLaws";
    SupportingDocumentType["AccountStatement"] = "AccountStatement";
    SupportingDocumentType["DeedOfDonation"] = "DeedOfDonation";
    SupportingDocumentType["DeedOfSale"] = "DeedOfSale";
    SupportingDocumentType["DeedOfSuccession"] = "DeedOfSuccession";
    SupportingDocumentType["LoanContract"] = "LoanContract";
    SupportingDocumentType["NotarialDeed"] = "NotarialDeed";
    SupportingDocumentType["SwornStatement"] = "SwornStatement";
    SupportingDocumentType["MeetingMinutes"] = "MeetingMinutes";
    SupportingDocumentType["NIFAccreditationCard"] = "NIFAccreditationCard";
    SupportingDocumentType["DecisionOfAppointment"] = "DecisionOfAppointment";
    SupportingDocumentType["FinancialStatements"] = "FinancialStatements";
})(SupportingDocumentType || (exports.SupportingDocumentType = SupportingDocumentType = {}));
/** Specific type for suspend account action */
var SuspendAccountReasonType;
(function (SuspendAccountReasonType) {
    SuspendAccountReasonType["SuspendRequested"] = "SuspendRequested";
})(SuspendAccountReasonType || (exports.SuspendAccountReasonType = SuspendAccountReasonType = {}));
/** Enum of reasons of rejection for suspendReceivedDirectDebitMandate mutation */
var SuspendReceivedDirectDebitMandatedRejectionReason;
(function (SuspendReceivedDirectDebitMandatedRejectionReason) {
    SuspendReceivedDirectDebitMandatedRejectionReason["ReceivedDirectDebitMandateCanceled"] = "ReceivedDirectDebitMandateCanceled";
})(SuspendReceivedDirectDebitMandatedRejectionReason || (exports.SuspendReceivedDirectDebitMandatedRejectionReason = SuspendReceivedDirectDebitMandatedRejectionReason = {}));
/** Status values of an identification */
var SwanIdentificationStatus;
(function (SwanIdentificationStatus) {
    SwanIdentificationStatus["Pending"] = "Pending";
    SwanIdentificationStatus["Valid"] = "Valid";
    SwanIdentificationStatus["Invalid"] = "Invalid";
    SwanIdentificationStatus["Canceled"] = "Canceled";
    SwanIdentificationStatus["Expired"] = "Expired";
    SwanIdentificationStatus["NotSupported"] = "NotSupported";
    SwanIdentificationStatus["NotStarted"] = "NotStarted";
    SwanIdentificationStatus["Started"] = "Started";
})(SwanIdentificationStatus || (exports.SwanIdentificationStatus = SwanIdentificationStatus = {}));
/** Individual ultimate beneficial owner title (Mr/Ms) */
var TitleEnum;
(function (TitleEnum) {
    TitleEnum["Mr"] = "Mr";
    TitleEnum["Ms"] = "Ms";
})(TitleEnum || (exports.TitleEnum = TitleEnum = {}));
/** The following reason codes for a r-transaction are defined: */
var TransactionReasonCode;
(function (TransactionReasonCode) {
    TransactionReasonCode["AccountClosed"] = "AccountClosed";
    TransactionReasonCode["AccountHolderDeceased"] = "AccountHolderDeceased";
    TransactionReasonCode["AccountLimited"] = "AccountLimited";
    TransactionReasonCode["AccountSuspended"] = "AccountSuspended";
    TransactionReasonCode["AccountUnknown"] = "AccountUnknown";
    TransactionReasonCode["BankRefused"] = "BankRefused";
    TransactionReasonCode["BeneficiaryAccountBlocked"] = "BeneficiaryAccountBlocked";
    TransactionReasonCode["BeneficiaryAccountClosed"] = "BeneficiaryAccountClosed";
    TransactionReasonCode["BeneficiaryAccountIncorrect"] = "BeneficiaryAccountIncorrect";
    TransactionReasonCode["BeneficiaryAccountUnknown"] = "BeneficiaryAccountUnknown";
    TransactionReasonCode["BeneficiaryBankBicInvalid"] = "BeneficiaryBankBicInvalid";
    TransactionReasonCode["BeneficiaryBranchCodeInvalid"] = "BeneficiaryBranchCodeInvalid";
    TransactionReasonCode["BeneficiaryPhoneNumberInvalid"] = "BeneficiaryPhoneNumberInvalid";
    TransactionReasonCode["BeneficiaryIdNumberInvalid"] = "BeneficiaryIdNumberInvalid";
    TransactionReasonCode["BeneficiaryRutNumberInvalid"] = "BeneficiaryRutNumberInvalid";
    TransactionReasonCode["BeneficiaryTaxIdInvalid"] = "BeneficiaryTaxIdInvalid";
    TransactionReasonCode["BeneficiaryTaxIdSuspended"] = "BeneficiaryTaxIdSuspended";
    TransactionReasonCode["BeneficiaryCurrencyInvalid"] = "BeneficiaryCurrencyInvalid";
    TransactionReasonCode["BeneficiaryBankNotReachable"] = "BeneficiaryBankNotReachable";
    TransactionReasonCode["BeneficiaryDeceased"] = "BeneficiaryDeceased";
    TransactionReasonCode["CardExpired"] = "CardExpired";
    TransactionReasonCode["CardNotActivated"] = "CardNotActivated";
    TransactionReasonCode["CardPermanentlyBlocked"] = "CardPermanentlyBlocked";
    TransactionReasonCode["CardSuspended"] = "CardSuspended";
    TransactionReasonCode["CheckInvalid"] = "CheckInvalid";
    TransactionReasonCode["CheckNumberInvalid"] = "CheckNumberInvalid";
    TransactionReasonCode["CreditorBankOffline"] = "CreditorBankOffline";
    TransactionReasonCode["CreditorBankTechnicalErrorOccurred"] = "CreditorBankTechnicalErrorOccurred";
    TransactionReasonCode["CreditorBankTimeout"] = "CreditorBankTimeout";
    TransactionReasonCode["DebtorAccountBlocked"] = "DebtorAccountBlocked";
    TransactionReasonCode["DebtorAccountClosed"] = "DebtorAccountClosed";
    TransactionReasonCode["DebtorAccountConsumer"] = "DebtorAccountConsumer";
    TransactionReasonCode["DebtorAccountUnknown"] = "DebtorAccountUnknown";
    TransactionReasonCode["DebtorBankOffline"] = "DebtorBankOffline";
    TransactionReasonCode["DebtorBankTechnicalErrorOccurred"] = "DebtorBankTechnicalErrorOccurred";
    TransactionReasonCode["DebtorBankTimeout"] = "DebtorBankTimeout";
    TransactionReasonCode["DebtorDeceased"] = "DebtorDeceased";
    TransactionReasonCode["FundsAlreadyTransferredBack"] = "FundsAlreadyTransferredBack";
    TransactionReasonCode["InsufficientFunds"] = "InsufficientFunds";
    TransactionReasonCode["InvalidCreditorName"] = "InvalidCreditorName";
    TransactionReasonCode["InvalidExpirationDate"] = "InvalidExpirationDate";
    TransactionReasonCode["InvalidPin"] = "InvalidPin";
    TransactionReasonCode["InvalidPinAttemptsExceeded"] = "InvalidPinAttemptsExceeded";
    TransactionReasonCode["InvalidSecurityNumber"] = "InvalidSecurityNumber";
    TransactionReasonCode["LegalOrBankDecision"] = "LegalOrBankDecision";
    TransactionReasonCode["MandateInvalid"] = "MandateInvalid";
    TransactionReasonCode["MerchantShouldResubmitAuthorization"] = "MerchantShouldResubmitAuthorization";
    TransactionReasonCode["NoAnswerFromBeneficiary"] = "NoAnswerFromBeneficiary";
    TransactionReasonCode["NoOriginalTransactionReceived"] = "NoOriginalTransactionReceived";
    TransactionReasonCode["PartnerRefused"] = "PartnerRefused";
    TransactionReasonCode["PartnerTechnicalErrorOccurred"] = "PartnerTechnicalErrorOccurred";
    TransactionReasonCode["PeriodAmountLimitExceeded"] = "PeriodAmountLimitExceeded";
    TransactionReasonCode["PeriodNbTransactionLimitExceeded"] = "PeriodNbTransactionLimitExceeded";
    TransactionReasonCode["PinRequiredForFurtherTransaction"] = "PinRequiredForFurtherTransaction";
    TransactionReasonCode["ReasonNotSpecifiedByBank"] = "ReasonNotSpecifiedByBank";
    TransactionReasonCode["ReasonNotSpecifiedByBeneficiary"] = "ReasonNotSpecifiedByBeneficiary";
    TransactionReasonCode["ReasonNotSpecifiedByDebtor"] = "ReasonNotSpecifiedByDebtor";
    TransactionReasonCode["ReasonNotSpecifiedByOriginator"] = "ReasonNotSpecifiedByOriginator";
    TransactionReasonCode["RecallAccepted"] = "RecallAccepted";
    TransactionReasonCode["RefundRequestedByDebtor"] = "RefundRequestedByDebtor";
    TransactionReasonCode["RefundRequestedByCreditor"] = "RefundRequestedByCreditor";
    TransactionReasonCode["RegulatoryReason"] = "RegulatoryReason";
    TransactionReasonCode["RlmcKeyInvalid"] = "RlmcKeyInvalid";
    TransactionReasonCode["SwanOffline"] = "SwanOffline";
    TransactionReasonCode["SwanRefused"] = "SwanRefused";
    TransactionReasonCode["SwanTechnicalErrorOccurred"] = "SwanTechnicalErrorOccurred";
    TransactionReasonCode["SwanTimeout"] = "SwanTimeout";
    TransactionReasonCode["TechnicalIssue"] = "TechnicalIssue";
    TransactionReasonCode["TermsAndConditionsLimitExceeded"] = "TermsAndConditionsLimitExceeded";
    TransactionReasonCode["TransactionAmountIncorrect"] = "TransactionAmountIncorrect";
    TransactionReasonCode["TransactionAmountLimitExceeded"] = "TransactionAmountLimitExceeded";
    TransactionReasonCode["TargetCurrencyNotAvailable"] = "TargetCurrencyNotAvailable";
    TransactionReasonCode["TransactionDuplicated"] = "TransactionDuplicated";
    TransactionReasonCode["TransactionOnAccountTypeNotAllowed"] = "TransactionOnAccountTypeNotAllowed";
    TransactionReasonCode["TransactionOnCardTypeNotAllowed"] = "TransactionOnCardTypeNotAllowed";
    TransactionReasonCode["TransactionPurposeInvalid"] = "TransactionPurposeInvalid";
    TransactionReasonCode["TransactionReferenceInvalid"] = "TransactionReferenceInvalid";
    TransactionReasonCode["TransactionTypeNotAllowed"] = "TransactionTypeNotAllowed";
})(TransactionReasonCode || (exports.TransactionReasonCode = TransactionReasonCode = {}));
/** Transaction side */
var TransactionSide;
(function (TransactionSide) {
    TransactionSide["Debit"] = "Debit";
    TransactionSide["Credit"] = "Credit";
})(TransactionSide || (exports.TransactionSide = TransactionSide = {}));
var TransactionsOrderByField;
(function (TransactionsOrderByField) {
    TransactionsOrderByField["id"] = "id";
    TransactionsOrderByField["createdAt"] = "createdAt";
    TransactionsOrderByField["updatedAt"] = "updatedAt";
    TransactionsOrderByField["executionDate"] = "executionDate";
})(TransactionsOrderByField || (exports.TransactionsOrderByField = TransactionsOrderByField = {}));
/** Transaction status */
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Booked"] = "Booked";
    TransactionStatus["Rejected"] = "Rejected";
    TransactionStatus["Pending"] = "Pending";
    TransactionStatus["Canceled"] = "Canceled";
    TransactionStatus["Upcoming"] = "Upcoming";
    TransactionStatus["Released"] = "Released";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
/** Transaction Type */
var TransactionTypeEnum;
(function (TransactionTypeEnum) {
    TransactionTypeEnum["InternalCreditTransferOut"] = "InternalCreditTransferOut";
    TransactionTypeEnum["InternalCreditTransferOutReturn"] = "InternalCreditTransferOutReturn";
    TransactionTypeEnum["InternalCreditTransferOutRecall"] = "InternalCreditTransferOutRecall";
    TransactionTypeEnum["InternalCreditTransferIn"] = "InternalCreditTransferIn";
    TransactionTypeEnum["InternalCreditTransferInReturn"] = "InternalCreditTransferInReturn";
    TransactionTypeEnum["InternalCreditTransferInRecall"] = "InternalCreditTransferInRecall";
    TransactionTypeEnum["SepaCreditTransferOut"] = "SepaCreditTransferOut";
    TransactionTypeEnum["SepaInstantCreditTransferOut"] = "SepaInstantCreditTransferOut";
    TransactionTypeEnum["SepaInstantCreditTransferIn"] = "SepaInstantCreditTransferIn";
    TransactionTypeEnum["SepaCreditTransferOutReturn"] = "SepaCreditTransferOutReturn";
    TransactionTypeEnum["SepaInstantCreditTransferOutRecall"] = "SepaInstantCreditTransferOutRecall";
    TransactionTypeEnum["SepaInstantCreditTransferInRecall"] = "SepaInstantCreditTransferInRecall";
    TransactionTypeEnum["SepaCreditTransferOutRecall"] = "SepaCreditTransferOutRecall";
    TransactionTypeEnum["SepaCreditTransferIn"] = "SepaCreditTransferIn";
    TransactionTypeEnum["SepaCreditTransferInReturn"] = "SepaCreditTransferInReturn";
    TransactionTypeEnum["SepaCreditTransferInRecall"] = "SepaCreditTransferInRecall";
    TransactionTypeEnum["FeesOut"] = "FeesOut";
    TransactionTypeEnum["FeesIn"] = "FeesIn";
    TransactionTypeEnum["SepaDirectDebitIn"] = "SepaDirectDebitIn";
    TransactionTypeEnum["SepaDirectDebitInReturn"] = "SepaDirectDebitInReturn";
    TransactionTypeEnum["SepaDirectDebitInReversal"] = "SepaDirectDebitInReversal";
    TransactionTypeEnum["SepaDirectDebitOut"] = "SepaDirectDebitOut";
    TransactionTypeEnum["SepaDirectDebitOutReturn"] = "SepaDirectDebitOutReturn";
    TransactionTypeEnum["SepaDirectDebitOutReversal"] = "SepaDirectDebitOutReversal";
    TransactionTypeEnum["CardOutAuthorization"] = "CardOutAuthorization";
    TransactionTypeEnum["CardOutDebit"] = "CardOutDebit";
    TransactionTypeEnum["CardOutDebitReversal"] = "CardOutDebitReversal";
    TransactionTypeEnum["CardOutCredit"] = "CardOutCredit";
    TransactionTypeEnum["CardOutCreditReversal"] = "CardOutCreditReversal";
    TransactionTypeEnum["InternalDirectDebitIn"] = "InternalDirectDebitIn";
    TransactionTypeEnum["InternalDirectDebitInReturn"] = "InternalDirectDebitInReturn";
    TransactionTypeEnum["InternalDirectDebitOut"] = "InternalDirectDebitOut";
    TransactionTypeEnum["InternalDirectDebitOutReturn"] = "InternalDirectDebitOutReturn";
    TransactionTypeEnum["CheckIn"] = "CheckIn";
    TransactionTypeEnum["CheckInReturn"] = "CheckInReturn";
    TransactionTypeEnum["InternationalCreditTransferIn"] = "InternationalCreditTransferIn";
    TransactionTypeEnum["InternationalCreditTransferOut"] = "InternationalCreditTransferOut";
    TransactionTypeEnum["InternationalCreditTransferInReturn"] = "InternationalCreditTransferInReturn";
    TransactionTypeEnum["InternationalCreditTransferOutReturn"] = "InternationalCreditTransferOutReturn";
})(TransactionTypeEnum || (exports.TransactionTypeEnum = TransactionTypeEnum = {}));
/** Field we can use when ordering that can be applied when listing trusted beneficiaries */
var TrustedBeneficiaryOrderByFieldInput;
(function (TrustedBeneficiaryOrderByFieldInput) {
    TrustedBeneficiaryOrderByFieldInput["createdAt"] = "createdAt";
    TrustedBeneficiaryOrderByFieldInput["label"] = "label";
    TrustedBeneficiaryOrderByFieldInput["updatedAt"] = "updatedAt";
})(TrustedBeneficiaryOrderByFieldInput || (exports.TrustedBeneficiaryOrderByFieldInput = TrustedBeneficiaryOrderByFieldInput = {}));
/** TrustedBeneficiary status */
var TrustedBeneficiaryStatus;
(function (TrustedBeneficiaryStatus) {
    TrustedBeneficiaryStatus["Canceled"] = "Canceled";
    TrustedBeneficiaryStatus["ConsentPending"] = "ConsentPending";
    TrustedBeneficiaryStatus["Enabled"] = "Enabled";
})(TrustedBeneficiaryStatus || (exports.TrustedBeneficiaryStatus = TrustedBeneficiaryStatus = {}));
/** Quality of the account holder doing the onboarding */
var TypeOfRepresentation;
(function (TypeOfRepresentation) {
    TypeOfRepresentation["LegalRepresentative"] = "LegalRepresentative";
    TypeOfRepresentation["PowerOfAttorney"] = "PowerOfAttorney";
})(TypeOfRepresentation || (exports.TypeOfRepresentation = TypeOfRepresentation = {}));
/** Ultimate Beneficial Owner type. */
var UltimateBeneficialOwnerType;
(function (UltimateBeneficialOwnerType) {
    UltimateBeneficialOwnerType["DirectIndividual"] = "DirectIndividual";
    UltimateBeneficialOwnerType["DirectCompany"] = "DirectCompany";
    UltimateBeneficialOwnerType["IndirectIndividual"] = "IndirectIndividual";
    UltimateBeneficialOwnerType["IndirectCompany"] = "IndirectCompany";
})(UltimateBeneficialOwnerType || (exports.UltimateBeneficialOwnerType = UltimateBeneficialOwnerType = {}));
/** Field we can use when ordering that can be applied when listing users */
var UserOrderByFieldInput;
(function (UserOrderByFieldInput) {
    UserOrderByFieldInput["createdAt"] = "createdAt";
    UserOrderByFieldInput["updatedAt"] = "updatedAt";
})(UserOrderByFieldInput || (exports.UserOrderByFieldInput = UserOrderByFieldInput = {}));
var ValidationFieldErrorCode;
(function (ValidationFieldErrorCode) {
    ValidationFieldErrorCode["InvalidString"] = "InvalidString";
    ValidationFieldErrorCode["InvalidType"] = "InvalidType";
    ValidationFieldErrorCode["TooLong"] = "TooLong";
    ValidationFieldErrorCode["TooShort"] = "TooShort";
    ValidationFieldErrorCode["UnrecognizedKeys"] = "UnrecognizedKeys";
})(ValidationFieldErrorCode || (exports.ValidationFieldErrorCode = ValidationFieldErrorCode = {}));
/** Verification Flow. */
var VerificationFlow;
(function (VerificationFlow) {
    VerificationFlow["Upfront"] = "Upfront";
    VerificationFlow["Progressive"] = "Progressive";
})(VerificationFlow || (exports.VerificationFlow = VerificationFlow = {}));
/** Verification status of an account holder */
var VerificationStatus;
(function (VerificationStatus) {
    VerificationStatus["NotStarted"] = "NotStarted";
    VerificationStatus["WaitingForInformation"] = "WaitingForInformation";
    VerificationStatus["Pending"] = "Pending";
    VerificationStatus["Verified"] = "Verified";
    VerificationStatus["Refused"] = "Refused";
})(VerificationStatus || (exports.VerificationStatus = VerificationStatus = {}));
/** Wallet Provider */
var WalletProviderType;
(function (WalletProviderType) {
    WalletProviderType["ApplePay"] = "ApplePay";
    WalletProviderType["GooglePay"] = "GooglePay";
})(WalletProviderType || (exports.WalletProviderType = WalletProviderType = {}));
var WebhookSubscriptionCreationStatus;
(function (WebhookSubscriptionCreationStatus) {
    WebhookSubscriptionCreationStatus["Enabled"] = "Enabled";
    WebhookSubscriptionCreationStatus["Disabled"] = "Disabled";
})(WebhookSubscriptionCreationStatus || (exports.WebhookSubscriptionCreationStatus = WebhookSubscriptionCreationStatus = {}));
/** State of a Webhook Subscription
It is either Enabled or Disabled by the owner,
ot set to Broken when delivery fails repeatedly. */
var WebhookSubscriptionStatus;
(function (WebhookSubscriptionStatus) {
    WebhookSubscriptionStatus["Enabled"] = "Enabled";
    WebhookSubscriptionStatus["Disabled"] = "Disabled";
    WebhookSubscriptionStatus["Broken"] = "Broken";
})(WebhookSubscriptionStatus || (exports.WebhookSubscriptionStatus = WebhookSubscriptionStatus = {}));
